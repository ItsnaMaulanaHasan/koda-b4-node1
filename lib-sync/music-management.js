import { existsSync, readdirSync, mkdirSync, renameSync } from "node:fs";
import path from "node:path";

export const musicManagement = () => {
  const dest = path.join("music");
  const fileMusics = readdirSync(dest);

  fileMusics.forEach((file) => {
    const artist = file.split(" - ")[0];
    const folder = path.join(dest, `${artist}`);
    const isExist = existsSync(folder);
    if (!isExist) {
      mkdirSync(folder);
    }

    if (file.endsWith(".mp3")) {
      renameSync(path.join(dest, file), path.join(folder, `${file}`));
    }
  });

  console.log("Proses manage file musik berhasil");
};
