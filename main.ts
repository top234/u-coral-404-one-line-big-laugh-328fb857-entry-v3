import * as fs from "node:fs";
import * as path from "node:path";

// v3 'Texted from the Next Room' — one original funny line.
// Beat one states the complaint; beat two delivers it through the
// very medium being complained about, and the last three words
// ("From the next room") spring the trap.
const joke = 'My wife says I spend too much time on my phone. She texted me that. From the next room.';

const outputDir = process.env.OUTPUT_DIR ?? "/output";
const entryPath = path.join(outputDir, "entry.txt");
const line = joke + "\n";

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(entryPath, line);
