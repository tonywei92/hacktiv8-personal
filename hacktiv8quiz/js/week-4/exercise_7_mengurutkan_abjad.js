function urutkanAbjad(str) {
    var charLib = "abcdefghijklmnopqrstuvwxyz";
    var result = "";
    for (var i = 0; i < charLib.length; i++) {
        for (var j = 0; j < str.length; j++) {
            if(str[j] === charLib[i]){
                result+=charLib[i]
            }
        }
    }

    return result;
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'