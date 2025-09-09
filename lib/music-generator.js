import { writeFile } from "node:fs";

export const musicGenerator = (musics) => {
  return new Promise((resolve, rejects) => {
    musics.forEach((music) => {
      writeFile(`./music/${music}.mp3`, "", (err) => {
        if (err) rejects(err);
      });
    });
    resolve("File musik berhasil dibuat");
  });
};
