import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = [
  "Enough",
  "",
  '"May I pour?" I ask.',
  '"To the blue band," you say,',
  '"so I can lift it."',
  "",
  "I tilt the heavy kettle,",
  "watch dark tea climb,",
  "hold back the rest.",
  "",
  "You lift the warm cup",
  "steady to your lips.",
  "What I left empty",
  "kept it yours.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
