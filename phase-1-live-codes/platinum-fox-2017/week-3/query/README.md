# ** QUERY (estimasi 20 Menit) **

### dilarang menggunakan view, sub-query

## Release 0

- tampilkan status title, point, level, player name, age, dan gender, urutkan berdasarkan level dari yang terbesar ke yang terkecil

hasilnya sebagai berikut:
```javascript
[ { title: 'Hero',
    point: 16338232,
    level: 300,
    name: 'Jeyone',
    age: 25,
    gender: 'Female' },
  { title: 'Berserker',
    point: 462192,
    level: 241,
    name: 'Fiverna',
    age: 31,
    gender: 'Male' },
  { title: 'Grunt',
    point: 230522,
    level: 210,
    name: 'Saitama',
    age: 24,
    gender: 'Male' },
  { title: 'Apprentice',
    point: 113322,
    level: 182,
    name: 'Dendimon',
    age: 27,
    gender: 'Male' },
  { title: 'Novice',
    point: 87232,
    level: 160,
    name: 'Rogoue',
    age: 22,
    gender: 'Female' },
  { title: 'Rookie',
    point: 67292,
    level: 137,
    name: 'Minami',
    age: 18,
    gender: 'Female' },
  { title: 'Greenhorn',
    point: 51595,
    level: 126,
    name: 'Matumbaman',
    age: 21,
    gender: 'Male' },
  { title: 'Henchman',
    point: 8806,
    level: 76,
    name: 'Hamabe',
    age: 18,
    gender: 'Female' },
  { title: 'Vandal',
    point: 1220,
    level: 50,
    name: 'Jerax',
    age: 24,
    gender: 'Male' },
  { title: 'Beggar',
    point: 0,
    level: 10,
    name: 'Fayola',
    age: 20,
    gender: 'Male' } ]
```

## Release 1

- tampilkan `player` yang memiliki `jumlah kartu`, dan berjenis kelamin `male` serta tampilkan 3 teratas dari yang paling banyak jumlah kartunya.


hasilnya sebagai berikut:

| totalcard | playerI  | name        | age   | gender |
| :-------- | :------- |:------------| :-----|:-------|
| 8         | 2        | Jerax       |  24   |  Male  |
| 7         | 1        | Fayola      |  20   |  Male  |
| 4         | 4        | Matumbaman  |  21   |  Male  |
