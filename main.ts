import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = [
  "The Eye",
  "",
  "Once you threaded needles for me",
  "without the lamp.",
  "",
  "Now the thread misses twice.",
  '"May I?" I ask.',
  'You look away: "Only the eye."',
  "",
  "I slip the wet end through,",
  "stop before the knot,",
  "pass the needle back.",
  "You pull the first stitch tight.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
