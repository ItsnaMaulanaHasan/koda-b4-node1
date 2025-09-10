import { writeFile, readdir } from "node:fs/promises";
import path from "node:path";

export const musicGenerator = async (musics) => {
  try {
    const dest = path.join("music");
    const fileMusics = await readdir(dest);
    await musics.forEach(async (music) => {
      if (!fileMusics.includes(music)) {
        await writeFile(path.join(dest, `${music}.mp3`), "");
      }
    });
    console.log("File musik berhasil digenerate");
  } catch (err) {
    console.log("Gagal generate file musik");
    throw err;
  }
};
