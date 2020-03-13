function string_to_array(str) {
  return str.split(",").map(item => (item = item.split("")));
}

console.log(string_to_array("aqrst,ukaei,ffooo"));
console.log(string_to_array("qwer,tyui,asdf,ghjk"));
