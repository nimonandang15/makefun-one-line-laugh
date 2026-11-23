import * as fs from "node:fs";

// One funny line for the house judge, built as setup → twist → punch:
// setup: a smart fridge nags its owner about dieting (an everyday truth
// about health gadgets preaching at us); twist: it orders a cake for
// itself; punch: "it diets me, not itself" — the surprise lands on the
// very last word, flipping who the diet was ever for, in one sentence.
const text =
  "My smart fridge emailed me a diet plan this morning, then ordered a cake for itself — turns out it diets me, not itself.";

// Runtime gate: the competition requires /output/entry.txt to be UTF-8
// text of 1–200 characters, not only whitespace. Count code points (not
// UTF-16 units or bytes) so multi-byte characters are measured the way
// the gate counts them, and fail loudly before writing anything bad.
const codePoints = [...text];
if (codePoints.length < 1 || codePoints.length > 200) {
  throw new Error(
    `entry must be 1–200 characters, got ${codePoints.length}`,
  );
}
if (text.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (text.includes("\n") || text.includes("\r")) {
  throw new Error("entry must be a single line");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", text, "utf8");
