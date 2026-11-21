import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = [
  "Leave",
  "",
  "You hold the shears shut and ask.",
  "I nod, give you the iron,",
  "step back as you choose",
  "what stays.",
  "",
  "You clear the deadwood I kept,",
  "spare a bent shoot tight with bud,",
  "then lay the sap-wet iron back.",
  "My tree stands braver than my grip.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
