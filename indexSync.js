import { musicGenerator } from "./lib/music-generator.js";
import { musicManagement } from "./lib/music-management.js";

const musics = [
  "Slipknot - Psychosocial",
  "Slipknot - SIC",
  "Slipknot - Snuff",
  "Slipknot - Unsainted",
  "Asking Alexandria - Closure",
  "Asking Alexandria - Killing You",
  "Asking Alexandria - Moving On",
  "Avenged Sevenfold - Little Piece of Heaven",
  "Avenged Sevenfold - Victim",
  "Imminence - The Black",
];

musicGenerator(musics);
musicManagement();
