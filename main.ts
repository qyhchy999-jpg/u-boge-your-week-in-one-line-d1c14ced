// Your Week in One Line — make.fun entry for @yuhao-qiao.
// The program writes one line to /output/entry.txt: the whole week in
// at most 100 characters — the win, the fail, the chaos, all of it.
// Five days, nine meetings, one decision, and the decision was to
// schedule another meeting. The line is baked into the code below so
// the program runs with no network and writes the same bytes on
// every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: "Five days, nine meetings, one decision, and it was to
// schedule another meeting." The arithmetic is the joke — five days
// of work and a single decision — and the decision is the chaos: the
// only thing the week produced was more week. The old line counted
// fourteen meetings and zero decisions and let the calendar file for
// divorce; this one is tighter, because the punchline is not that
// nothing was decided, it is that the one decision was to decide
// nothing, later, in another meeting. Every word earns its place.
const LINE =
  "Five days, nine meetings, one decision, and it was to schedule another meeting.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

// Revised once: the only decision was to schedule another meeting —
// the week produced more week. That is the whole joke in one clause.
