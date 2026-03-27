import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { homedir } from 'os';

export const CONFIG_DIR = join(homedir(), '.openlabor');
export const CONFIG_FILE = join(CONFIG_DIR, 'config.yaml');

const DEFAULTS = {
  auto_upgrade: false,
  default_target: 'claude',
};

/**
 * Parse a simple key: value YAML file (no nested objects, no arrays).
 * Supports: string, boolean (true/false), number values.
 */
function parseSimpleYaml(text) {
  const result = {};
  for (const line of text.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const colonIdx = trimmed.indexOf(':');
    if (colonIdx === -1) continue;
    const key = trimmed.slice(0, colonIdx).trim();
    const raw = trimmed.slice(colonIdx + 1).trim();
    if (raw === 'true') result[key] = true;
    else if (raw === 'false') result[key] = false;
    else if (raw !== '' && !isNaN(Number(raw))) result[key] = Number(raw);
    else result[key] = raw;
  }
  return result;
}

/**
 * Serialize a flat object to simple YAML.
 */
function serializeSimpleYaml(obj) {
  const lines = ['# ~/.openlabor/config.yaml'];
  for (const [key, val] of Object.entries(obj)) {
    lines.push(`${key}: ${val}`);
  }
  return lines.join('\n') + '\n';
}

/**
 * Load config from ~/.openlabor/config.yaml, merging with defaults.
 */
export function loadConfig() {
  if (!existsSync(CONFIG_FILE)) {
    return { ...DEFAULTS };
  }
  try {
    const text = readFileSync(CONFIG_FILE, 'utf8');
    const parsed = parseSimpleYaml(text);
    return { ...DEFAULTS, ...parsed };
  } catch {
    return { ...DEFAULTS };
  }
}

/**
 * Save config to ~/.openlabor/config.yaml.
 */
export function saveConfig(data) {
  if (!existsSync(CONFIG_DIR)) {
    mkdirSync(CONFIG_DIR, { recursive: true });
  }
  writeFileSync(CONFIG_FILE, serializeSimpleYaml(data), 'utf8');
}
