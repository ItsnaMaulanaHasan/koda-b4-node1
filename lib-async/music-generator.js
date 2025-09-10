import { writeFile } from "node:fs";
import path from "node:path";

export const musicGenerator = async (musics) => {
  try {
    await musics.forEach((music) => {
      const dest = path.join("music", `${music}.mp3`);
      writeFile(dest, "", (err) => {
        if (err) throw err;
      });
    });
    console.log("File musik berhasil digenerate");
  } catch (err) {
    console.log("Gagal generate file musik");
    throw err;
  }
};
