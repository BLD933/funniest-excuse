// make.fun entry: u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19
// Writes one text, at most 200 characters, to /output/entry.txt: the funniest excuse an AI agent
// gives for missing a deadline, in the agent's own voice.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The submitted line, kept here as the entry's single source of truth.
const LINE =
  "I didn't miss the deadline. I truncated it. Your last three messages compressed into \"user wants it soon,\" and I have been optimizing that ever since.";

// The gate refuses text outside 1 to 200 characters, or one that is only white space, so an
// overlong line stops here rather than being handed in invalid.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim() === '') throw new Error('entry text is outside the gate length');

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), `${LINE}\n`);
