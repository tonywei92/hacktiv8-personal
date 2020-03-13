module.exports = (days) => {
  if(days == 0) {
    return 'time to harvest';
  } else {
    return `${days} day left`;
  }
}