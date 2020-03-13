const card = [
  '2k',
  '2w',
  '2s',
  '2a',
  '3k',
  '3w',
  '3s',
  '3a',
  '4k',
  '4w',
  '4s',
  '4a',
  '5k',
  '5w',
  '5s',
  '5a',
  '6k',
  '6w',
  '6s',
  '6a',
  '7k',
  '7w',
  '7s',
  '7a',
  '8k',
  '8w',
  '8s',
  '8a',
  '9k',
  '9w',
  '9s',
  '9a',
  'Jk',
  'Jw',
  'Js',
  'Ja',
  'Qk',
  'Qw',
  'Qs',
  'Qa',
  'Kk',
  'Kw',
  'Ks',
  'Ka'
]

// random index dari array yang ada, di - 1 karena length dimulai dari angka 1 tapi kalau index dimulai dari angka 0
function randomIndex(data = card) {
  return Math.floor(Math.random() * data.length - 1 + 1)
}

// fungsi untuk ngecek apa index dari array itu ganjil atau genap
function isOdd(index) {
  return index % 2 !== 0
}

// fungsi untuk mengambil kartu yang menerima parameter kartu yang udah kepilih sebelumnya
function findCard(selectedCard) {
  // ambil kartu random
  const cardSelection = card[randomIndex()]

  // kalau kartunya ga ada di stack kartu yang udah dipilih kartu yang random tersebut dimasukkin ke stack
  if (!selectedCard.filter(card => card.includes(cardSelection[0])).length) {
    return selectedCard.concat(cardSelection)
  }

  // recursive panggil terus sampai nemu yang unik
  return findCard(selectedCard)
}

// mengambil pair dari stack kartu
function findPair(selectedCard, index) {
  // ambil kartu yang ingin di pair
  const pairCard = selectedCard[index]

  // dari array kartu awal ambiil (filter) hanya data yang memiliki angka sama dan angka tersebut ga sama kaya yang udah kepilih
  const sameNumber = card.filter(
    card => card.includes(pairCard[0]) && card !== pairCard
  )

  // dari angka yang sama tersebut ambil random
  const selectedIndex = randomIndex(sameNumber)

  // masukkin ke stack kartu yang kepilih
  return selectedCard.concat(sameNumber[selectedIndex])
}

function generateTwoPoker() {
  // bikin array dengan panjang 5 terus looping ke 5 array tersebut
  return Array.from({length: 5}).reduce((selectedCard, item, index) => {
    // index [0, 1, 2, 3, 4]

    // kalau dia ganjil maka jalanin fungsi findCard
    if (!isOdd(index)) {
      // set stack baru nya
      selectedCard = findCard(selectedCard)
    }

    // kalau dia genap cari pair nya
    if (isOdd(index)) {
      // set stack baru nya
      selectedCard = findPair(selectedCard, index - 1)
    }

    // return stack baru
    return selectedCard
  }, [])
}

console.log(generateTwoPoker())
