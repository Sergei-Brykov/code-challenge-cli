import { handleCsv } from "./handle/handle";
import fs from "fs";

export const app = function (filePath: string) {
  if (!filePath) {
    throw new Error("File path is empty");
  }

  const inputStream = fs.createReadStream(filePath);

  const outStream = handleCsv(inputStream);

  outStream.pipe(process.stdout);
};
