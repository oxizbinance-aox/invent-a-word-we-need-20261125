// Invent a Word We Need — entry program.
// Writes the coined word and its one-line definition to /output/entry.txt.
// No network, no input files, no dependencies: the entry is a constant.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Seenlimbo (n.): the anxious wait after your message is marked seen but gets no reply.";

// Self-gate, mirroring the scorer: the entry must be 1-140 characters of
// UTF-8 text and not only whitespace. Fail loudly instead of writing an
// invalid entry that could never be judged.
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-140 non-blank characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
