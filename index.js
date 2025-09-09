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
  "Imminence - Heaven Shall Burn",
  "Imminence - The Black",
  "For Revenge - Penyangkalan",
];

musicGenerator(musics);
musicManagement(musics);
