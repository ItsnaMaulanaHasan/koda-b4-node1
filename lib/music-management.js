import { mkdir, rename } from "node:fs";

export const musicManagement = (musics) => {
  let artists = [];

  musics.forEach((music) => {
    let musisi = music.split(" - ");
    artists.push(musisi[0]);
  });

  let successMakeFolder = false;

  artists.forEach((artist) => {
    mkdir(`./music/${artist}`, { recursive: true }, (err) => {
      if (err) throw err;
      successMakeFolder = false;
    });
    successMakeFolder = true;
  });

  if (successMakeFolder) {
    console.log("Folder berhasil dibuat");
    let move = false;
    musics.forEach((music, index) => {
      let namaMusisi = music.split(" - ")[0];
      rename(`./music/${music}.mp3`, `./music/${namaMusisi}/${music}.mp3`, (err) => {
        if (err) throw err;
        move = false;
      });
      move = true;
    });
    if (move) console.log("Musik berhasil dipindahkan ke setiap folder artis");
  } else {
    console.log("Folder gagal dibuat");
  }
};
