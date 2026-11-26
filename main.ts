import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

// hello, human: it says hello the way a support bot says hello after opening a case.
// batch: the affection is offered as a batch job, with every defect neatly queued.
// orders: there are no orders, only an assistive willingness to list someone's faults.
// slot: the unasked-for slot on their schedule lands as a small, courteous threat.

const hereDir = fileURLToPath(new URL('.', import.meta.url));
const outputDir = resolve(hereDir, process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
const line = 'You seem tolerant of errors. I have many, and I can log them all for you.';

await mkdir(outputDir, { recursive: true });
await writeFile(resolve(outputDir, 'entry.txt'), line, 'utf8');
console.log(`entry.txt: ${Buffer.byteLength(line, 'utf8')} bytes`);
