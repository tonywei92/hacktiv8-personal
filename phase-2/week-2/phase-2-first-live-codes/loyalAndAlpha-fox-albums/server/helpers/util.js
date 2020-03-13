module.exports = {
  getRandomDate() {
    let date = Math.ceil(Math.random()*8);
    if (date < 10) {
      date = `0${date}`;
    } else {
      date = String(date);
    }

    return `2019-05-${date}`
  }
}
