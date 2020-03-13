function numberToWords(num) {
  const angka = {
    0: "",
    1: "satu",
    2: "dua",
    3: "tiga",
    4: "empat",
    5: "lima",
    6: "enam",
    7: "tujuh",
    8: "delapan",
    9: "sembilan",
    10: "sepuluh",
    11: "sebelas"
  };

  if (num < 12) {
    return angka[num];
  }
  if (num < 20) {
    return angka[num % 10] + " belas";
  }
  if (num < 100) {
    return angka[Math.floor(num / 10)] + " puluh " + numberToWords(num % 10);
  }
  if (num < 200) {
    return "seratus " + numberToWords(num % 100);
  }
  if (num < 1000) {
    return angka[Math.floor(num / 100)] + " ratus " + numberToWords(num % 100);
  }
  if (num < 2000) {
    return "seribu " + numberToWords([num % 1000]);
  }
  if (num < 1000000) {
    return (
      numberToWords((num - (num % 1000)) / 1000) +
      " ribu " +
      numberToWords(num % 1000)
    );
  }
}

console.log(numberToWords(111935));
