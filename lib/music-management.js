import { mkdir, rename, existsSync } from "node:fs";

export const musicManagement = (musics) => {
  return new Promise((resolve, rejects) => {
    musics.forEach((music) => {
      let [artist] = music.split(" - ");
      if (!existsSync(`./music/${artist}`)) {
        mkdir(`./music/${artist}`, { recursive: true }, (err) => {
          if (err) rejects(`Gagal membuat folder ${artist}: ${err}`);
        });
      }
    });

    musics.forEach((music) => {
      let namaMusisi = music.split(" - ")[0];
      rename(`./music/${music}.mp3`, `./music/${namaMusisi}/${music}.mp3`, (err) => {
        if (err) rejects(`File musik gagal dipindahkan: ${err}`);
      });
    });

    resolve("Proses manage file musik berhasil");
  });
};
