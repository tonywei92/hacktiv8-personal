module.exports = function (date) {
  const dateObject = new Date(date);
  let dateNumber = dateObject.getDate();
      dateString = dateNumber < 10 ? '0' + dateNumber : dateNumber;

  let monthNumber = dateObject.getMonth() + 1;
      monthString = monthNumber < 10 ? '0' + monthNumber : monthNumber;
  return `${dateString}/${monthString}/${dateObject.getFullYear()}`;
}
