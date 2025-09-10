import { writeFileSync } from "node:fs";
import path from "node:path";

export const musicGenerator = (musics) => {
  musics.forEach((music) => {
    const dest = path.join("music", `${music}.mp3`);
    writeFileSync(dest, "");
  });
  console.log("File musik berhasil digenerate");
};
