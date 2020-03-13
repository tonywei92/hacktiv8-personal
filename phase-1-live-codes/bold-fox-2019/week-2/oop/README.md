# ELECTION
###### Estimasi waktu: 90 Menit

Kamu akan membuat sebuah sistem pemilu sederhana. Berikut requirement dari sistem pemilu tersebut.

Saat pertama kali `Election` terbuat, `Election` tidak memiliki data participants dan votes. Data partipants dan votes akan bertambah apabila terdapat proses registrasi participant dan votes.

1. Terdapat 2 jenis `Participant` yaitu `Politician` dan `Voter`. Dimana setiap jenis `Participant` memiliki:
  - firstName
  - lastName
  - age
  - gender

  Untuk `Politician` memiliki attribut khusus yaitu `party` dan `politicianId` sedangkan untuk `Voter` juga memiliki attribut khusus yaitu `voterId`

2. Untuk attribut `party` pada `Politician` merupakan objek dari `Party` yang memiliki attribute sebagai berikut:
  - name
  - politicians

3. `Election` memiliki attribute:
  - electionTitle
  - year
  - participants
  - votesData


## RELEASE 0
Buatlah class-class yang diperlukan untuk mengimplementasikan `Election` dan `Participant` (Coba kamu pikirkan apakah memerlukan inheritance, composition, aggreagtion)

## RELEASE 1
- Implementasikan `Election` dimana attribute-nya memiliki default value:
    - participants: `{ politicians: [], voters: [] }`
    - votesData: `[ ]`

- Buatlah method `registerParticipants` yang menerima parameter berupa object literal dengan format sebagai berikut:
  - politicians = `[{<fullName>, <age>, <gender>, <objectParty>}, ...]`
  - voters = `[{<fullName>, <age>, <gender>}, ...]`
  
  Dimana output dari method ini adalah menambahkan instance `Politician` dan `Voter` pada attribute `participants`

- Buatlah method `generateParticipantId` yang akan membuat `politicianId` dan `voterId` dengan format sebagai berikut:
  - `voterId` = `<3 huruf pertama pada attribut lastName>-<tahun lahir>-<3 angka random>`
  - `politicianId` = `<3 huruf pertama pada attribut lastName>-<tahun lahir>-<3 angka random>-<3 huruf pertama dari nama partai>`
  
- Ketika method `registerParticipants ` dijalankan maka:
  - attribute `participants` akan bertambah sesuai dengan parameter yang telah diberikan dengan format sebagai berikut:
    - politicians: `[<objectPolitician>]`
    - voters: `[<objectVoters>]`
  - menambah object `Politician` pada attribute `politicians` pada `Party` 

## RELEASE 2
Buatlah method `votes` yang menerima parameter berupa array of object, dimana method ini berfungsi menambahkan data pada attribute `votesData` berdasarkan parameter yang diinput.

```javascript
  let voter1 = presidentElection.participants.voters[0].voterId
  let voter2 = presidentElection.participants.voters[1].voterId
  let voter3 = presidentElection.participants.voters[2].voterId
  let politician1 = presidentElection.participants.politicians[0].politicianId
  let politician2 = presidentElection.participants.politicians[1].politicianId
  let politician3 = presidentElection.participants.politicians[2].politicianId
  let votesData = [{
      politicianId: politician1,
      voterId: voter1
    }, {
      politicianId: politician1,
      voterId: voter2
    }, {
      politicianId: politician2,
      voterId: voter3
    }]
```
Output dan rules dari release ini adalah:
  - attribute `votesData` pada `Election` akan berisi object dengan properti sebagai berikut: 
    - politician: `<objectPolitician>`
    - voter: `<objectVoter>`
  - tampilkan pesan dengan format sebagai berikut:
    ```javascript
      TOTAL VOTES: <totalDataVotes>
      VALID VOTES: <validVotes>
      INVALID VOTES: <invalidVotes>
    ```
  - apabila `politicianId` atau `voterId` yang dimasukan tidak terdapat pada attribute `participants` maka `invalidVotes` akan bertambah 1
  - apabila pada `votesData` terdapat `voterId` yang memilih lebih dari satu maka `invalidVotes` akan bertambah 1

## RELEASE 3
- Buatlah method `showElectability` pada `Election`. Method ini berfungsi untuk menampilkan nama-nama politician diurutkan berdasarkan suara terbanyak dengan format sebagai berikut:
  - Name
  - Party
  - totalVotes

```javascript
  /* OUTPUT 
LIST POLITICIANS
================
Name: Irsyah Mardiah
party: Independence
totalVotes: 4

Name: Yoki Suprayogi
party: Golkar
totalVotes: 2

Name: Aries Dimas
party: PDIP
totalVotes: 1

Name: Ryan Akbar
party: Golkar
totalVotes: 0
  */
```
