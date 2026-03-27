// ANSI color codes — no external deps
export const colors = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  bgBlue: '\x1b[44m',
};

/**
 * Pad a string to a fixed width (truncates if too long).
 */
function pad(str, width) {
  const s = String(str || '');
  if (s.length >= width) return s.slice(0, width - 1) + ' ';
  return s + ' '.repeat(width - s.length);
}

/**
 * Strip ANSI codes to measure visual length.
 */
function visLen(str) {
  // eslint-disable-next-line no-control-regex
  return str.replace(/\x1b\[[0-9;]*m/g, '').length;
}

/**
 * Print a table given an array of row arrays and column widths.
 * columns: [{ label, width, color? }]
 */
export function printTable(columns, rows) {
  // Header
  const header = columns.map((c) => `${colors.bold}${colors.cyan}${pad(c.label, c.width)}${colors.reset}`).join('  ');
  console.log(header);

  // Separator
  const sep = columns.map((c) => '-'.repeat(c.width)).join('  ');
  console.log(`${colors.dim}${sep}${colors.reset}`);

  // Rows
  for (const row of rows) {
    const line = columns.map((c, i) => {
      const val = row[i] || '';
      const colored = c.color ? `${c.color}${val}${colors.reset}` : val;
      // Pad based on visual length
      const vl = visLen(colored);
      const padding = Math.max(0, c.width - vl);
      return colored + ' '.repeat(padding);
    }).join('  ');
    console.log(line);
  }
}

/**
 * Print employees table.
 */
export function printEmployees(employees) {
  const cols = [
    { label: 'ID', width: 16 },
    { label: 'NAME', width: 14 },
    { label: 'ROLE', width: 22 },
    { label: 'DEPARTMENT', width: 14 },
    { label: 'TAGLINE', width: 40 },
  ];

  const rows = employees.map((e) => [
    `${colors.yellow}${e.slug}${colors.reset}`,
    e.name,
    e.role,
    `${colors.dim}${e.department}${colors.reset}`,
    `${colors.dim}${e.tagline}${colors.reset}`,
  ]);

  console.log('');
  console.log(`${colors.bold}${colors.magenta}OpenLabor Employees${colors.reset}  ${colors.dim}(${employees.length} total)${colors.reset}`);
  console.log('');
  printTable(cols, rows);
  console.log('');
  console.log(`${colors.dim}Install with: openlabor install employee <id>${colors.reset}`);
  console.log('');
}

/**
 * Print skills table.
 */
export function printSkills(skills) {
  const cols = [
    { label: 'SKILL', width: 24 },
    { label: 'CATEGORY', width: 16 },
    { label: 'DESCRIPTION', width: 60 },
  ];

  const rows = skills.map((s) => [
    `${colors.yellow}${s.slug}${colors.reset}`,
    `${colors.cyan}${s.category}${colors.reset}`,
    `${colors.dim}${s.description}${colors.reset}`,
  ]);

  console.log('');
  console.log(`${colors.bold}${colors.magenta}OpenLabor Skills${colors.reset}  ${colors.dim}(${skills.length} total)${colors.reset}`);
  console.log('');
  printTable(cols, rows);
  console.log('');
  console.log(`${colors.dim}Install with: openlabor install skill <name>${colors.reset}`);
  console.log('');
}

/**
 * Print search results.
 */
export function printSearchResults(results, query) {
  if (results.length === 0) {
    console.log(`${colors.yellow}No results found for "${query}"${colors.reset}`);
    return;
  }

  console.log('');
  console.log(`${colors.bold}Search results for "${query}"${colors.reset}  ${colors.dim}(${results.length} found)${colors.reset}`);
  console.log('');

  for (const result of results) {
    const { type, item } = result;
    if (type === 'employee') {
      console.log(
        `  ${colors.green}employee${colors.reset}  ${colors.yellow}${colors.bold}${item.slug}${colors.reset}` +
        `  ${item.name} — ${item.role}` +
        `  ${colors.dim}[${item.department}]${colors.reset}`
      );
      if (item.tagline) {
        console.log(`           ${colors.dim}${item.tagline}${colors.reset}`);
      }
    } else {
      console.log(
        `  ${colors.cyan}skill${colors.reset}     ${colors.yellow}${colors.bold}${item.slug}${colors.reset}` +
        `  ${item.name}` +
        `  ${colors.dim}[${item.category}]${colors.reset}`
      );
      if (item.description) {
        const desc = item.description.length > 80 ? item.description.slice(0, 77) + '...' : item.description;
        console.log(`           ${colors.dim}${desc}${colors.reset}`);
      }
    }
  }
  console.log('');
}

export function printTargets(TARGETS) {
  console.log('');
  console.log(`${colors.bold}Supported install targets:${colors.reset}`);
  console.log('');
  for (const [key, t] of Object.entries(TARGETS)) {
    const dest = t.mode === 'file'
      ? `${t.dir}/<name>${t.ext}`
      : t.file;
    console.log(`  ${colors.yellow}${key.padEnd(12)}${colors.reset}  ${t.name.padEnd(14)}  ${colors.dim}${dest}${colors.reset}`);
  }
  console.log('');
  console.log(`${colors.dim}Use with: openlabor install skill <name> --target <target>${colors.reset}`);
  console.log('');
}

export function printHelp() {
  console.log('');
  console.log(`${colors.bold}openlabor${colors.reset} — Browse and install OpenLabor employees & skills into Claude Code, Codex, Cursor, OpenCode, and more`);
  console.log('');
  console.log(`${colors.bold}Usage:${colors.reset}`);
  console.log(`  openlabor <command> [options]`);
  console.log('');
  console.log(`${colors.bold}Commands:${colors.reset}`);
  console.log(`  ${colors.yellow}list employees${colors.reset}                         List all available employees`);
  console.log(`  ${colors.yellow}list skills${colors.reset}                            List all available skills`);
  console.log(`  ${colors.yellow}install employee <name> [--target <t>]${colors.reset}  Install an employee`);
  console.log(`  ${colors.yellow}install skill <name> [--target <t>]${colors.reset}     Install a skill`);
  console.log(`  ${colors.yellow}search <query>${colors.reset}                         Search employees and skills`);
  console.log(`  ${colors.yellow}targets${colors.reset}                                List supported install targets`);
  console.log('');
  console.log(`${colors.bold}Update & Config:${colors.reset}`);
  console.log(`  ${colors.yellow}version${colors.reset}                                Show version and install info`);
  console.log(`  ${colors.yellow}update${colors.reset}                                 Update openlabor to latest`);
  console.log(`  ${colors.yellow}config${colors.reset}                                 Show current config`);
  console.log(`  ${colors.yellow}config <key> <value>${colors.reset}                   Set a config value`);
  console.log(`  ${colors.yellow}outdated${colors.reset}                               List skills installed with older version`);
  console.log(`  ${colors.yellow}update-skills${colors.reset}                          Re-install all openlabor-tracked skills`);
  console.log('');
  console.log(`${colors.bold}Targets (--target / -t):${colors.reset}`);
  console.log(`  ${colors.cyan}claude${colors.reset}     Claude Code  → .claude/commands/<name>.md`);
  console.log(`  ${colors.cyan}cursor${colors.reset}     Cursor       → .cursor/rules/<name>.mdc`);
  console.log(`  ${colors.cyan}codex${colors.reset}      Codex        → codex.md (appended)`);
  console.log(`  ${colors.cyan}opencode${colors.reset}   OpenCode     → opencode.md (appended)`);
  console.log(`  ${colors.cyan}windsurf${colors.reset}   Windsurf     → .windsurfrules (appended)`);
  console.log(`  ${colors.cyan}raw${colors.reset}        Raw file     → ./<name>.md`);
  console.log('');
  console.log(`${colors.dim}If --target is omitted, the tool auto-detects based on config files in your project.${colors.reset}`);
  console.log('');
  console.log(`${colors.bold}Examples:${colors.reset}`);
  console.log(`  openlabor list employees`);
  console.log(`  openlabor list skills`);
  console.log(`  openlabor install skill airtable-manager`);
  console.log(`  openlabor install skill logo-maker --target cursor`);
  console.log(`  openlabor install employee cto --target codex`);
  console.log(`  openlabor search "social media"`);
  console.log(`  openlabor targets`);
  console.log(`  openlabor version`);
  console.log(`  openlabor config auto_upgrade true`);
  console.log(`  openlabor outdated`);
  console.log('');
}

/**
 * Print version info.
 */
export function printVersion(version, installType, registry) {
  console.log('');
  console.log(`${colors.bold}openlabor${colors.reset} v${version}`);
  console.log(`Install type: ${colors.cyan}${installType}${colors.reset}`);
  console.log(`Config: ${colors.dim}~/.openlabor/config.yaml${colors.reset}`);
  if (registry) {
    console.log(`Registry: ${colors.dim}${registry.employees} employees, ${registry.skills} skills${colors.reset}`);
  }
  console.log('');
}

/**
 * Print config key/value pairs.
 */
export function printConfig(config) {
  console.log('');
  console.log(`${colors.bold}Config${colors.reset} ${colors.dim}(~/.openlabor/config.yaml)${colors.reset}`);
  console.log('');
  for (const [key, val] of Object.entries(config)) {
    console.log(`  ${colors.yellow}${key}${colors.reset}: ${val}`);
  }
  console.log('');
}

/**
 * Print outdated skills list.
 */
export function printOutdated(outdated, currentVersion) {
  if (outdated.length === 0) {
    console.log(`${colors.green}All installed skills are up to date.${colors.reset}`);
    return;
  }
  console.log('');
  console.log(`${colors.bold}Outdated skills${colors.reset} ${colors.dim}(current CLI: v${currentVersion})${colors.reset}`);
  console.log('');
  for (const item of outdated) {
    console.log(
      `  ${colors.yellow}${item.slug.padEnd(24)}${colors.reset}` +
      `  ${colors.dim}v${item.installedVersion}${colors.reset} → ${colors.green}v${currentVersion}${colors.reset}`
    );
  }
  console.log('');
  console.log(`Run: ${colors.dim}openlabor update-skills${colors.reset}`);
  console.log('');
}
