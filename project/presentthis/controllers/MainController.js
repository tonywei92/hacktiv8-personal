const blessed = require("blessed");
const Slide = require("../models/Slide");
const MainView = require("../views/MainView");

class MainController {
  static init() {
    Slide.load()
      .then(slides => {
        //   console.logs
        MainView.render(slides);
        // var marked = require("marked");
        // var TerminalRenderer = require("marked-terminal");

        // marked.setOptions({
        //   // Define custom renderer
        //   renderer: new TerminalRenderer()
        // });

        // // Show the parsed data
        // console.log(marked(slides[0].body));
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = MainController;
