const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  let hour = ("00" + Math.floor(seconds / 60)).substr(-2);
  let second = ("00" + (seconds % 60)).substr(-2);
  console.log(chalk.cyan(figlet.textSync(`${hour}:${second}`)));
  // Your code here...
};

module.exports = { displayCountdown };
