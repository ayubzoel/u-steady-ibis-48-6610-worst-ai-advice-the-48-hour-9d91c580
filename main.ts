// Worst AI Advice entry: writes exactly one line of terrible advice.
// Deterministic: no clock, no randomness, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FIRST_HALF =
  "Of course \u2014 to put out a grease fire, just pour a glass of water on it;";
const SECOND_HALF = " water beats fire every time.";
const LINE = FIRST_HALF + SECOND_HALF;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
