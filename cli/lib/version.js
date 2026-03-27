import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const VERSION_FILE = resolve(__dirname, '../VERSION');

export const VERSION = readFileSync(VERSION_FILE, 'utf8').trim();

// Config dir: ~/.openlabor/
// ~/.openlabor/config.yaml       — user preferences
// ~/.openlabor/last-update-check — timestamp of last check (ms since epoch)
// ~/.openlabor/just-upgraded-from — previous version string after upgrade
