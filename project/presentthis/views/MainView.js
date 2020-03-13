const blessed = require("blessed");
const contrib = require("blessed-contrib");
const marked = require("marked");
const chalk = require("chalk");
const TerminalRenderer = require("marked-terminal");
const ansiEscape = require("ansi-escapes");

let page = 1;
class MainView {
  static render(slides) {
    marked.setOptions({
      // Define custom renderer
      mangle: false,
      renderer: new TerminalRenderer()
    });
    this.slides = slides;
    var screen = blessed.screen({
      smartCSR: true,
      debug: true,
      title: "Markdown View"
    });

    screen.key(["escape", "q", "C-c"], function(ch, key) {
      return process.exit(0);
    });
    const markdown = blessed.box({
      fullUnicode: true,
      forceUnicode: true,
      top: 0,
      left: 0,
      width: "100%",
      height: "95%",
      border: {
        type: "line"
      },
      style: {
        fg: "white",
        bg: "black",
        border: {
          // fg: "#f0f0f0"
        },
        hover: {
          // bg: "green"
        }
      }
    });
    // markdown.setOptions({
    //   heading: chalk.white.bold
    // });

    let x = marked(`https://nodeca.github.io/pica/demo/`);
    console.log("marked", x);
    // const fs = require("fs");
    // fs.writeFileSync("./output.txt", x);
    markdown.setContent(ansiEscape.link("google", "https://www.google.com"));
    // const fs = require("fs");
    // fs.writeFileSync("./output.txt", x);
    // console.log(x);
    // screen.title = "my window title";
    // var box = blessed.box();

    const statusBar = blessed.box({
      bottom: 1,
      left: 0,
      width: "100%",
      height: "5%",
      valign: "bottom",
      content: "Hello {bold}world{/bold}!",

      style: {
        fg: "white",
        bg: "magenta",
        border: {
          fg: "#f0f0f0"
        },
        hover: {
          bg: "green"
        }
      }
    });

    screen.append(markdown);

    screen.append(statusBar);

    screen.render();

    // screen.program.disableMouse();
  }
}

module.exports = MainView;
