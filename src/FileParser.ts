import fs from "fs";
import Path from "path";
export default class FileParser {
  private path: string;
  private data: string = "";
  constructor(path: string) {
    this.path = Path.join(__dirname, path);
  }
  scanFile() {
    return new Promise<string>((resolve, reject) => {
      fs.readFile(this.path, { encoding: "utf-8" }, (err, data) => {
        if (err) {
          return reject(err);
        }
        this.data = data;
        return resolve(data);
      });
    });
  }
  getLines() {
    if (!this.data) {
      throw new Error("should scan the file first");
    }

    return this.data.split("\r\n");
  }
}
