#! /usr/bin/env node

const MainController = require("./controllers/MainController");
// const ansiEscape = require("ansi-escapes");
// const z = ansiEscape.link("google", "https://www.google.com");
// console.log(z);
MainController.init();

// var marked = require("marked");
// var TerminalRenderer = require("marked-terminal");

// marked.setOptions({
//   // Define custom renderer
//   renderer: new TerminalRenderer()
// });

// // Show the parsed data
// let x = marked(
//   "- **[pica](https://nodeca.github.io/pica/demo/)** - high quality and fast image resize in browser."
// );

// const fs = require("fs");
// fs.writeFileSync("./output2.txt", x);
