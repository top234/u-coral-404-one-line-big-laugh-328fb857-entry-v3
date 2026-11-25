import * as fs from "node:fs";
import * as path from "node:path";

// v3 'Texted from the Next Room' — one original funny line.
const joke = 'My wife says I spend too much time on my phone. She texted me that. From the next room.';

const outputDir = process.env.OUTPUT_DIR ?? "/output";
const entryPath = path.join(outputDir, "entry.txt");

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(entryPath, joke + "\n");
