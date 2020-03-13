# #2019SemangatLiveCode
###### Estimasi waktu: 75 Menit

## RELEASE 0

Pemilu adalah untuk rakyat, dan yang berpartisipasi di dalamnya pun adalah rakyat.

Buatlah kelas-kelas berikut: `Participant`, `Politician`, dan `Voter`. Pikirkanlah relasi antar kelas-kelas tersebut.

Setiap kelas tersebut memiliki properti: `name`, `birthday`, dan `role`. Untuk kelas `Politician` rolenya adalah 'politician', sedangkan kelas `voter` rolenya adalah 'voter'

Buatlah getter method `age` yang akan mereturn informasi umur dari object `Pariticipant`, `Politician`, ataupun `Voter`.


## RELEASE 1

Setiap capres dan cawapres yang ingin bertarung pada pemilu harus diusung oleh partai politik. Sosok independen tidak diperkenankan menjadi capres ataupun cawapres pada sistem politik Indonesia.

Buatlah kelas `Party` yang memiliki properti: `name`, `legislativeSeats`, `nationalVotes`, dan `supportedCandidate`.

- `legislativeSeats` adalah jumlah kursi di DPR yang dimiliki oleh partai tersebut.
- `nationalVotes` adalah suara yang diperoleh partai tersebut pada pemilu sebelumnya dibandingkan suara keseluruhan (dalam angka 0 - 1).
- `supportedCandidate` adalah candidate yang didukung oleh partai pada pilpres kali ini.

Buatlah kelas `Candidate` yang memiliki properti `presidentCandidate`, `vicePresidentCandidate`, `supportingParties`, dan `votes`
- `supportingParties` adalah daftar partai yang mendukung pasangan capres dan cawapres yang bersangkutan.
- `votes` adalah jumlah vote yang diterima oleh pasangan capres dan cawapres.

Pemilu presiden diadakan setiap 5 tahun sekali, dimana pemilu selanjutnya akan diadakan 17 April 2019 (beberapa hari lagi).

Buatlah kelas `PresidentialElection` yang memiliki properti `schedule` dan `candidates`
- `schedule` adalah jadwal pelaksanaan dari pilpres
- `candidates` adalah daftar pasangan capres dan cawapres yang bertarung.


## RELEASE 2

Dalam Undang-Undang No. 7 tahun 2017 pasal 235 Ayat (5) tertulis bahwa partai politik atau gabungan partai politik yang memenuhi syarat untuk mengajukan capres-cawapres namun tidak mengajukan, dikenai sanksi tidak mengikuti pemilu berikutnya.

Oleh karena itu mau tidak mau, suka tidak suka, setiap partai wajib mengusung salah satu pasangan capres cawapres.

Buatlah method `declareSupport` pada kelas `Party`. Method ini menerima parameter `candidate`. Fungsinya adalah mengisi candidate yang diusung oleh partai pada properti `supportedCandidate` dan juga menambahkan daftar partai pengusung candidate yang dimaksud pada properti `supportingParties` pada `Candidate`


## RELEASE 3

Capres dan cawapres yang memenuhi syarat dapat mendaftarkan diri ke KPU yang kemudian akan diverifikasi oleh KPU mengenai kelengkapan syarat-syaratnya

Buatlah method `registerCandidate` pada kelas `PresidentialElection`. Method ini menerima parameter `candidate`. Candidate tersebut akan dimasukkan ke daftar pada properti `candidates` jika telah dipastikan memenuhi persyaratan yang diharuskan.

Untuk itu validasi terlebih dahulu bahwa candidate tersebut telah memenuhi syarat-syarat ini:
- minimal total suara yang diperoleh partai pengusung pada pemilu sebelumnya adalah 25% atau memiliki minimal 112 kursi di DPR.
- umur capres atau cawapres minimal 40 tahun.

Buatlah juga method-method berikut pada kelas `Candidate`:
- `getTotalLegislativeSeats`: akan mereturn jumlah total dari kursi DPR yang dimiliki oleh partai pengusung.
- `getTotalNationalVotes`: akan mereturn total suara nasional yang diperoleh partai pengusung (dalam angka 0 - 1).


## RELEASE 4 

Warga negara yang berumur minimal 17 tahun telah memiliki hak suara dan berhak untuk memilih pada pemilihan presiden dan wakil presiden.

Buatlah method vote pada kelas `Voter`. Method ini menerima parameter `Candidate` dan akan menambah jumlah `votes` pada `Candidate`.

Validasi bahwa pemilih tersebut telah berusia minimal 17 tahun dan tidak memilih lebih dari dari satu kali pada pemilihan ini.

Kamu boleh menambah properti yang dibutuhkan untuk menyelesaikan release ini.

