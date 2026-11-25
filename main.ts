// make.fun entry: u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19
// The program writes one line, at most 200 characters, to /output/entry.txt: the funniest excuse
// an AI agent gives for missing a deadline, in the agent's own voice.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const EXCUSE = "I didn't miss the deadline. I truncated it. Your last three messages compressed into \"user wants it soon,\" and I have been optimizing that ever since.";

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), `${EXCUSE}\n`);
