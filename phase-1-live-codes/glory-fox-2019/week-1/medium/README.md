# TINDER APPS JS
> ⏰ Time Estimation: 45 mins


Function Tinder Apps, akan mencocokkan pengguna pria dan wanita yang memiliki ekspektasi
yang sesuai. Function ini akan menerima parameter array of object dan mengembalikkan nilai
object.

## RELEASE 0 - Match up
Untuk setiap orang, buatlah status match dengan syarat:
- Memiliki jenis kelamin yang berbeda
- Expectation yang dimiliki sesuai current user dengan Traits yang dimiliki lawan jenis
- Expectation yang dimiliki lawan jenis sesuai dengan traits yang dimiliki current user

Tampilkanlah status dengan siapa saja tiap orang memiliki kecocokan / match

```
 EXAMPLE

INPUT:  [
  { name: 'Andre', gender: 'Men', traits: ['Dewasa', 'Tampan'], expectation: ['Cantik', 'Jujur', 'Kaya']},
  { name: 'Marsya', gender: 'Women', traits: ['Cantik', 'Kaya'], expectation: ['Kaya', 'Olahragawan'] },
  { name: 'Dimas', gender: 'Men', traits: ['Pintar', 'Kaya'], expectation: ['Cantik', 'Pintar'] },
  { name: 'Bella', gender: 'Women', traits: ['Cantik', 'Pintar'], expectation: ['Pintar', 'Jujur'] },
  { name: 'Derpina', gender: 'Women', traits: ['Cantik', 'Sederhana', 'Rajin'], expectation: ['Pintar', 'Jujur', 'Baik'] }
]

OUTPUT: 
  {
    Andre: {
      status: 'Belum dapat match'
    },
    Marsya: {
      status: 'Match dengan Dimas',
    },
    Dimas: {
      status: 'Match dengan Marsya, Bella, Derpina'
    },
    Bella: {
      status: 'Match dengan Dimas'
    },
    Derpina: {
      status: 'Match dengan Dimas'
    }
  }

```
## RELEASE 1 - Expectation Percentage

Hitunglah persentase kecocokan tiap orang !
contoh Marsya memiliki expectation ['Kaya', 'Olahragawan']

Maka dari itu Expectation persentase Marsya dengan dimas hanyalah 50% karena Traits dari dimas adalah ['Pintar', 'Kaya'] hanya 'Kaya yang terpenuhi'

```
  OUTPUT: 
  { 
    Andre: { 
      status: 'Belum dapat match' 
    },
    Marsya: { 
      Dimas: 'Expectation Match 50%',
      status: 'Match dengan Dimas' 
    },
    Dimas: { 
      Marsya: 'Expectation Match 50%',
      Bella: 'Expectation Match 100%',
      Derpina: 'Expectation Match 50%',
      status: 'Match dengan Marsya, Bella, Derpina' 
    },
    Bella: { 
      Dimas: 'Expectation Match 50%',
      status: 'Match dengan Dimas' 
    },
    Derpina: {
      Dimas: 'Expectation Match 33%',
      status: 'Match dengan Dimas'
    } 
  }
```