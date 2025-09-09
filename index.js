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

async function main() {
  try {
    const musicGenerate = await musicGenerator(musics);
    const musicManage = await musicManagement(musics);
    console.log(musicGenerate);
    console.log(musicManage);
  } catch (err) {
    console.log(err);
  }
}

main();
