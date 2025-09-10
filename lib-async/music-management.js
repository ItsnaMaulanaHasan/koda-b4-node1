import { readdir, mkdir, rename } from "node:fs/promises";
import path from "node:path";

export const musicManagement = async () => {
  try {
    const dest = path.join("music");
    let fileMusics = await readdir(dest);

    fileMusics.forEach(async (file) => {
      const artist = file.split(" - ")[0];
      const folder = path.join(dest, `${artist}`);

      await mkdir(folder, { recursive: true });

      if (file.endsWith(".mp3")) {
        await rename(path.join(dest, file), path.join(folder, `${file}`));
      }
    });

    console.log("Proses manage file musik berhasil");
  } catch (err) {
    console.log(err);
    throw err;
  }
};
