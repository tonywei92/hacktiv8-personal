/*
===============
String validator
===============

[INSTRUCTION]
String dianggap valid apabila semua karakternya muncul dengan frekuensi yang
sama. Juga valid apabila menghapus 1 karakter pada 1 index dalam string, dan
menjadikan frekuensi karakter sama.
Bila string valid, maka return "YES", dan sebaliknya "NO".

[EXAMPLE]
- Bila string adalah abc, maka valid karena {a = 1, b = 1, c = 1}
Bila string adalah abcc, maka valid karena {a = 1, b = 1, c = 2}, apabila huruf
c dihilangkan 1, maka {a = 1, b = 1, c = 1}
- Bila string adalah abccc, TIDAK valid karena { a = 1, b = 1, c = 3}, apabila
huruf c dihilangkan satu, menjadi {a = 1, b = 1, c = 2}
- Bila string adalah abcdefghhgfedecba, maka valid karena
{ a = 2, b = 2, c = 2, d = 2, e = 3, f = 2, g = 2, h = 2}, apabila huruf e
dihilangkan 1, menjadi { a = 2, b = 2, c = 2, d = 2, e = 2, f = 2, g = 2, h = 2}

[RULE]
1. dilarang menggunakan indexOf(), find(), filter(), shift(), unshift()
2. dilarang menggunakan regex
*/

function isValid(str) {
  // Your code here
  var arr = {};
  for (var i = 0; i < str.length; i++) {
    if (arr[str[i]] === undefined) {
      arr[str[i]] = 1;
    } else {
      arr[str[i]]++;
    }
  }
  var test = arr[str[0]];
  var unique = true;
  var difference = 0;
  for (var x in arr) {
    if (test !== arr[x]) {
      unique = false;
      difference++;
    }
  }

  if (unique) {
    return 'YES';
  }
  if (difference === 1) {
    return 'YES';
  } else {
    return 'NO';
  }
}

//TEST CASES
console.log(isValid('aabbcd')); // NO
console.log(isValid('aabbccddeefghi')); // NO
console.log(isValid('a')); // YES
console.log(isValid('aaaabbcc')); // NO
console.log(isValid('aaaaabc')); // NO
console.log(
  isValid(
    'ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd'
  )
); // YES
console.log(isValid('abcdefghhgfedecba')); // YES
