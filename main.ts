import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = [
  "Yours",
  "",
  "You lean in and ask",
  "if I will speak for you",
  "in words you do not know.",
  "",
  "I could soften your no",
  "and you would never hear it.",
  "",
  "I say it plain,",
  "even the part that shakes,",
  "and step back until the room",
  "looks at you, not me.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
