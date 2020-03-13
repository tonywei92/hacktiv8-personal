/*
===============
String validator
===============

[INSTRUCTION]
String dianggap valid apabila semua karakternya muncul dengan frekuensi yang sama.
Juga valid apabila menghapus 1 karakter pada 1 index dalam string, dan menjadikan frekuensi karakter sama.
Bila string valid, maka return "YES", dan sebaliknya "NO".

[EXAMPLE]
- Bila string adalah 'abc', maka valid karena {a = 1, b = 1, c = 1}
- Bila string adalah abcc, maka valid karena {a = 1, b = 1, c = 2},
apabila huruf c dihilangkan 1, maka {a = 1, b = 1, c = 1}

- Bila string adalah 'abccc', TIDAK valid karena { a = 1, b = 1, c = 3},
apabila huruf c dihilangkan satu, menjadi {a = 1, b = 1, c = 2}

- Bila string adalah 'abcdefghhgfedecba', maka valid karena
{ a = 2, b = 2, c = 2, d = 2, e = 3, f = 2, g = 2, h = 2},
apabila huruf e dihilangkan 1, menjadi { a = 2, b = 2, c = 2, d = 2, e = 2, f = 2, g = 2, h = 2}

[RULE]
1. dilarang menggunakan indexOf(), find(), filter(), shift(), unshift()
2. dilarang menggunakan regex
*/

function isValid(str) {
  var obj = {};
  for(var i = 0; i< str.length;i++){
    if(obj[str[i]] === undefined){
      obj[str[i]] = 0;
    }
    obj[str[i]]++;
  }
  var difference = 0;
  var firstCount = obj[str[0]];
  // console.log('obj', obj)
  var min = obj[str[0]];
  var max = 0;
  var found1 = 0;
  for(var x in obj){
    if(obj[x] === 1){
      found1++;
    }
    // console.log('compare', obj[x] !== firstCount, obj[x],firstCount)
    if(obj[x] !== firstCount){
      difference++;
    }
    if(min > obj[x]){
      min = obj[x];
    }
    if(max < obj[x]){
      max = obj[x]
    }
  }
  
  if(found1 === 1){
    return 'YES';
  }
  if(difference > 1){
    return 'NO'
  }
  else{
    if((max - min) > 1){
      return 'NO'
    }
    else{
      return 'YES'
    }
  }
}

//TEST CASES
console.log(isValid("aabbccd"));// YES
console.log(isValid("aabbcd")); // NO
console.log(isValid("aabbccddeefghi")); // NO
console.log(isValid("a")); // YES
console.log(isValid("aaaabbcc")); // NO
console.log(isValid("abccccc")); // NO
console.log(isValid("ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd")); // YES
console.log(isValid("abcdefghhgfedecba")); // YES