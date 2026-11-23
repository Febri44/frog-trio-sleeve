import { mkdirSync, writeFileSync } from "node:fs";

// Title and blurb, written verbatim: the sleeve notes are the whole entry.
const line =
  "Midnight at the Lily Pad\n\nRecorded live at the Lily Pad, the trio — Marlowe on tenor sax, Bix on upright bass, Tad on brushes — plays slow, damp standards that smell of rain and reeds. The room is small, the floor is a puddle, and the front row hasn't been dry-eyed since the first set. A record for late nights and low water.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
