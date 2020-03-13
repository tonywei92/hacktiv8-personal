const { displayCountdown } = require("./views");

const timer = seconds => {
  const interval = setInterval(() => {
    seconds -= 1;
    if (seconds <= 0) {
      clearInterval(interval);
    }
    displayCountdown(seconds);
  }, 1000);
};

module.exports = {
  timer
};
