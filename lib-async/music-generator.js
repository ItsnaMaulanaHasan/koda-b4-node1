import { writeFile } from "node:fs/promises";
import path from "node:path";

export const musicGenerator = async (musics) => {
  try {
    await musics.forEach(async (music) => {
      const dest = path.join("music", `${music}.mp3`);
      await writeFile(dest, "");
    });
    console.log("File musik berhasil digenerate");
  } catch (err) {
    console.log("Gagal generate file musik");
    throw err;
  }
};
