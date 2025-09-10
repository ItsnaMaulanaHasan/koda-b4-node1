import { musicGenerator } from "./lib-async/music-generator.js";
import { musicManagement } from "./lib-async/music-management.js";

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

const main = async () => {
  try {
    await musicGenerator(musics);
    await musicManagement();
  } catch (err) {
    console.log(err);
  }
};

main();
