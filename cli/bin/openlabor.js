#!/usr/bin/env node

import { listEmployees, listSkills, search } from '../lib/registry.js';
import { installEmployee, installSkill, TARGETS } from '../lib/installer.js';
import { printEmployees, printSkills, printSearchResults, printHelp, printTargets, printVersion, printConfig, printOutdated, colors } from '../lib/display.js';
import { VERSION } from '../lib/version.js';
import { checkForUpdate, checkForUpdateShell, printUpdateNotice, detectInstallType, performUpdate } from '../lib/updater.js';
import { loadConfig, saveConfig, CONFIG_FILE } from '../lib/config.js';
import { readFileSync, existsSync, readdirSync } from 'fs';
import { join } from 'path';

const args = process.argv.slice(2);

function unknownCommand(cmd) {
  console.error(`${colors.red}Unknown command:${colors.reset} ${cmd}`);
  console.error(`Run ${colors.dim}openlabor --help${colors.reset} for usage.`);
  process.exit(1);
}

if (args.length === 0 || args[0] === '--help' || args[0] === '-h' || args[0] === 'help') {
  printHelp();
  process.exit(0);
}

const [cmd, sub, ...rest] = args;

// Shell-based update check (synchronous, uses cache — fast)
const shellUpdateOutput = checkForUpdateShell();

// Non-blocking async update check fallback
const updateCheckPromise = checkForUpdate();

async function main() {
  let updateVersion = null;

  // Show just-upgraded notice at start
  if (shellUpdateOutput.startsWith('JUST_UPGRADED')) {
    const parts = shellUpdateOutput.split(' ');
    const oldVer = parts[1];
    const newVer = parts[2];
    console.log(`${colors.green}Upgraded from v${oldVer} to v${newVer}!${colors.reset}`);
    console.log('');
  }

  switch (cmd) {
    case 'list': {
      if (!sub || sub === 'employees') {
        const employees = listEmployees();
        printEmployees(employees);
      } else if (sub === 'skills') {
        const skills = listSkills();
        printSkills(skills);
      } else {
        console.error(`${colors.red}Unknown list target:${colors.reset} "${sub}"`);
        console.error(`Try: ${colors.dim}openlabor list employees${colors.reset} or ${colors.dim}openlabor list skills${colors.reset}`);
        process.exit(1);
      }
      break;
    }

    case 'install': {
      if (!sub) {
        console.error(`${colors.red}Error:${colors.reset} Specify what to install.`);
        console.error(`Usage: ${colors.dim}openlabor install employee <name>${colors.reset}`);
        console.error(`       ${colors.dim}openlabor install skill <name>${colors.reset}`);
        process.exit(1);
      }

      // Parse --target / -t from rest args
      let name = null;
      let targetName = null;
      for (let i = 0; i < rest.length; i++) {
        if ((rest[i] === '--target' || rest[i] === '-t') && rest[i + 1]) {
          targetName = rest[i + 1];
          i++;
        } else if (!name && !rest[i].startsWith('-')) {
          name = rest[i];
        }
      }

      if (!name) {
        console.error(`${colors.red}Error:${colors.reset} Missing name argument.`);
        console.error(`Usage: ${colors.dim}openlabor install ${sub} <name>${colors.reset}`);
        process.exit(1);
      }

      if (sub === 'employee') {
        await installEmployee(name, targetName).catch((err) => {
          console.error(`${colors.red}Error:${colors.reset} ${err.message}`);
          process.exit(1);
        });
      } else if (sub === 'skill') {
        await installSkill(name, targetName).catch((err) => {
          console.error(`${colors.red}Error:${colors.reset} ${err.message}`);
          process.exit(1);
        });
      } else {
        console.error(`${colors.red}Unknown install type:${colors.reset} "${sub}"`);
        console.error(`Try: ${colors.dim}employee${colors.reset} or ${colors.dim}skill${colors.reset}`);
        process.exit(1);
      }
      break;
    }

    case 'search': {
      const query = [sub, ...rest].filter(Boolean).join(' ');
      if (!query) {
        console.error(`${colors.red}Error:${colors.reset} Missing search query.`);
        console.error(`Usage: ${colors.dim}openlabor search <query>${colors.reset}`);
        process.exit(1);
      }
      const searchResult = search(query);
      if (searchResult.remote) {
        console.log(`${colors.yellow}Search requires the local repo.${colors.reset} Clone the repo or use ${colors.dim}openlabor list skills${colors.reset} to browse.`);
      } else {
        printSearchResults(searchResult.results, query);
      }
      break;
    }

    case 'targets': {
      printTargets(TARGETS);
      break;
    }

    case 'version': {
      const installType = detectInstallType();
      const employees = listEmployees();
      const skills = listSkills();
      printVersion(VERSION, installType, { employees: employees.length, skills: skills.length });
      // No update notice for version command — it's already showing version
      return;
    }

    case 'update': {
      await performUpdate();
      return;
    }

    case 'config': {
      const config = loadConfig();
      if (!sub) {
        // Show config
        printConfig(config);
      } else {
        // Set a value: openlabor config <key> <value>
        const key = sub;
        const value = rest[0];
        if (value === undefined) {
          console.error(`${colors.red}Error:${colors.reset} Missing value.`);
          console.error(`Usage: ${colors.dim}openlabor config <key> <value>${colors.reset}`);
          process.exit(1);
        }
        // Parse booleans
        let parsed = value;
        if (value === 'true') parsed = true;
        else if (value === 'false') parsed = false;
        config[key] = parsed;
        saveConfig(config);
        console.log(`${colors.green}Config updated:${colors.reset} ${key} = ${parsed}`);
        console.log(`${colors.dim}Saved to: ${CONFIG_FILE}${colors.reset}`);
      }
      break;
    }

    case 'outdated': {
      // Scan known target dirs for files with openlabor markers and check version
      const outdated = scanOutdated();
      printOutdated(outdated, VERSION);
      break;
    }

    case 'update-skills': {
      const outdated = scanOutdated();
      if (outdated.length === 0) {
        console.log(`${colors.green}All installed skills are up to date.${colors.reset}`);
        break;
      }
      console.log(`Re-installing ${outdated.length} skill(s)...`);
      console.log('');
      for (const item of outdated) {
        if (item.type === 'skill') {
          await installSkill(item.slug, item.target).catch((err) => {
            console.error(`${colors.red}Error reinstalling ${item.slug}:${colors.reset} ${err.message}`);
          });
        } else if (item.type === 'employee') {
          await installEmployee(item.slug, item.target).catch((err) => {
            console.error(`${colors.red}Error reinstalling ${item.slug}:${colors.reset} ${err.message}`);
          });
        }
      }
      console.log('');
      console.log(`${colors.green}Done.${colors.reset}`);
      break;
    }

    default:
      unknownCommand(cmd);
  }

  // Print update notice after command output
  // Prefer shell output (already checked cache), fall back to async check
  if (shellUpdateOutput.startsWith('UPGRADE_AVAILABLE')) {
    const parts = shellUpdateOutput.split(' ');
    const oldVer = parts[1];
    const newVer = parts[2];
    process.stderr.write(
      `\n${colors.yellow}openlabor v${newVer} available${colors.reset} (current: v${oldVer}). Run: ${colors.dim}openlabor update${colors.reset}\n`
    );
  } else {
    updateVersion = await updateCheckPromise;
    printUpdateNotice(updateVersion);
  }
}

/**
 * Scan install target directories for files with openlabor markers.
 * Returns array of { slug, type, installedVersion, target, filePath }.
 */
function scanOutdated() {
  const cwd = process.cwd();
  const results = [];

  // Targets that use file-per-skill mode
  const fileDirs = [
    { target: 'claude', dir: join(cwd, '.claude', 'commands'), ext: '.md' },
    { target: 'cursor', dir: join(cwd, '.cursor', 'rules'), ext: '.mdc' },
    { target: 'raw', dir: cwd, ext: '.md' },
  ];

  // Targets that use append mode (single file)
  const appendFiles = [
    { target: 'codex', file: join(cwd, 'codex.md') },
    { target: 'opencode', file: join(cwd, 'opencode.md') },
    { target: 'windsurf', file: join(cwd, '.windsurfrules') },
  ];

  // Marker pattern: <!-- Installed from openlabor (skill|employee): <slug> | v<version> -->
  const markerRegex = /<!-- Installed from openlabor (skill|employee): ([^\s|]+)(?: \| v([^\s]+))? -->/;

  for (const { target, dir, ext } of fileDirs) {
    if (!existsSync(dir)) continue;
    let entries;
    try {
      entries = readdirSync(dir);
    } catch {
      continue;
    }
    for (const entry of entries) {
      if (!entry.endsWith(ext)) continue;
      const filePath = join(dir, entry);
      try {
        const content = readFileSync(filePath, 'utf8');
        const match = content.match(markerRegex);
        if (!match) continue;
        const [, type, slug, installedVersion] = match;
        if (!installedVersion || installedVersion !== VERSION) {
          results.push({ slug, type, installedVersion: installedVersion || 'unknown', target, filePath });
        }
      } catch {
        // skip unreadable files
      }
    }
  }

  for (const { target, file } of appendFiles) {
    if (!existsSync(file)) continue;
    try {
      const content = readFileSync(file, 'utf8');
      let match;
      const re = /<!-- Installed from openlabor (skill|employee): ([^\s|]+)(?: \| v([^\s]+))? -->/g;
      while ((match = re.exec(content)) !== null) {
        const [, type, slug, installedVersion] = match;
        if (!installedVersion || installedVersion !== VERSION) {
          results.push({ slug, type, installedVersion: installedVersion || 'unknown', target, filePath: file });
        }
      }
    } catch {
      // skip
    }
  }

  return results;
}

main().catch((err) => {
  console.error(`${colors.red}Error:${colors.reset} ${err.message}`);
  process.exit(1);
});
