import { mkdir, rename, existsSync } from "node:fs";

export const musicManagement = (musics) => {
  return new Promise((resolve, rejects) => {
    let artists = [];
    musics.forEach((music) => {
      let musisi = music.split(" - ");
      if (!existsSync(`./music/${musisi[0]}`)) {
        artists.push(musisi[0]);
      }
    });

    if (artists.length > 0) {
      artists.forEach((artist) => {
        mkdir(`./music/${artist}`, { recursive: true }, (err) => {
          if (err) rejects(`Gagal membuat folder ${artist}: ${err}`);
        });
      });
      console.log("Berhasil membuat folder musisi");
    } else {
      rejects("Tidak ada folder yang dibuat, karena folder musisi sudah ada");
    }

    musics.forEach((music) => {
      let namaMusisi = music.split(" - ")[0];
      rename(`./music/${music}.mp3`, `./music/${namaMusisi}/${music}.mp3`, (err) => {
        if (err) rejects(`File musik gagal dipindahkan: ${err}`);
      });
    });
    
    resolve("Proses manage file musik berhasil");
  });
};
