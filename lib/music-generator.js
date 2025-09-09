import { writeFile } from "node:fs";

export const musicGenerator = (musics) => {
  let success = false;
  musics.forEach((music) => {
    writeFile(`./music/${music}.mp3`, "", (err) => {
      if (err) throw err;
      success = false;
    });
    success = true;
  });
  if (success) console.log(`Semua musik berhasil ditambahkan ke folder musik`);
};
