module.exports = function (date) {
  const dateObject = new Date(date);
  return `${dateObject.getDate()}/${dateObject.getMonth() + 1}/${dateObject.getFullYear()}`;
}
