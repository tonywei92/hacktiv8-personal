const fs = require("fs");
const path = require("path");
const fm = require("front-matter");
class Slide {
  static load() {
    return new Promise((resolve, reject) => {
      const slides = [];
      let mdfiles = [];

      fs.readdir("./", (err, files) => {
        if (err) {
          reject(err);
        } else {
          files.forEach(file => {
            if (file.endsWith(".md")) {
              let buffer = fs.readFileSync(path.resolve("./", file), "utf8");
              const fmFile = fm(buffer);
              slides.push({
                attributes: fmFile.attributes,
                body: fmFile.body
              });
            }
          });
          resolve(slides);
        }
      });
    });
  }
}

module.exports = Slide;
