import { mkdir, rename } from "node:fs";

export const musicManagement = (musics) => {
  return new Promise((resolve, rejects) => {
    let artists = [];

    musics.forEach((music) => {
      let musisi = music.split(" - ");
      if (!artists.includes(musisi[0])) {
        artists.push(musisi[0]);
      }
    });

    artists.forEach((artist) => {
      mkdir(`./music/${artist}`, { recursive: true }, (err) => {
        if (err) rejects(`Gagal membuat folder: ${err}`);
      });
    });

    musics.forEach((music) => {
      let namaMusisi = music.split(" - ")[0];
      rename(`./music/${music}.mp3`, `./music/${namaMusisi}/${music}.mp3`, (err) => {
        if (err) rejects(`File musik gagal dipindahkan: ${err}`);
      });
    });
    resolve("Folder berhasil dibuat dan Musik berhasil dipindahkan");
  });
};
