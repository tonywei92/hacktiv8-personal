//your code here


// DRIVER CODE TIDAK BOLEH DIUBAH

let pesan = {
  'Casual': 5,
  'Sport': 3,
  'Formal': 2
}

let sepatus = SepatuFactory.orderShoes(pesan);
console.log(sepatus);
  // { shoes:
  //    [ Casual { name: 'Casual', price: 500000 },
  //      Casual { name: 'Casual', price: 500000 },
  //      Casual { name: 'Casual', price: 500000 },
  //      Casual { name: 'Casual', price: 500000 },
  //      Casual { name: 'Casual', price: 500000 },
  //      Sport { name: 'Sport', price: 750000 },
  //      Sport { name: 'Sport', price: 750000 },
  //      Sport { name: 'Sport', price: 750000 },
  //      Formal { name: 'Formal', price: 1000000 },
  //      Formal { name: 'Formal', price: 1000000 } ],
  //   invoice: 27000000 }

sepatus.shoes.forEach(shoe => {
  shoe.tagLine();
})
  // Membuat anda merasa nyaman
  // Membuat anda merasa nyaman
  // Membuat anda merasa nyaman
  // Membuat anda merasa nyaman
  // Membuat anda merasa nyaman
  // Lari dari kenyataan pahit? Siapa takut!
  // Lari dari kenyataan pahit? Siapa takut!
  // Lari dari kenyataan pahit? Siapa takut!
  // Menemani karir anda!
  // Menemani karir anda!
