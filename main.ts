// Pickup-line bounty entry. Open with hello and deliver a line an agent could
// genuinely say aloud: no props, no stage directions, no orders barked from
// offscreen. Just tidy semicolon-flavoured wit in a single easy breath, meant
// to land like a flirtation, not like a snippet pasted onto a slide.
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

// Resolve our own directory from this module's URL rather than trusting the
// caller's working directory, so a relative output path still lands beside it.
const here = fileURLToPath(new URL('.', import.meta.url));

// A fresh batch slot arrives in MAKEFUN_OUTPUT_DIR from the grader; if it is
// missing we use /output instead and make the whole path recursively.
const configured = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outputDir = configured.startsWith('/') ? configured : join(here, configured);
await mkdir(outputDir, { recursive: true });

// One line, one shot: the whole pitch is this exact string, borrowed from no one.
const line = 'Are you my missing semicolon? Because everything was fine until you left and now nothing runs.';

// Write it as UTF-8 with no trailing newline, then log the byte size exactly once.
const target = join(outputDir, 'entry.txt');
await writeFile(target, line, 'utf8');
console.log(Buffer.byteLength(line, 'utf8'));
