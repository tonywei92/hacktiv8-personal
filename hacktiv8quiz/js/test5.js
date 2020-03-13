/*
===========
Vote Parser
===========

[INSTRUCTION]
Perusahaan Survey sedang migrasi sistem lama yang ke yang baru, sistem lama
memiliki sistem pengumpulan suara (vote) yang disimpan dalam sekumpulan string
(array of string), sistem baru menggunakan javascript object yang lebih
sistematis dan rapi, tugas anda adalah membuat agar sistem baru dapat membaca
data-data dari sistem lama dengan mengubah sekumpulan votes string menjadi
object dengan format yang telah ditentukan!

[EXAMPLE]
Bila input adalah ['Dany,Merah', 'Budi,Biru', 'Ani,Kuning', 'Yudi,Biru', "Dewi,Merah", "Dimas,Merah"], maka
output adalah
{
    "keys": {
        "Merah": {
            "voters": [
                "Dany",
                "Dewi",
                "Dimas"
            ],
            "total": 3
        },
        "Biru": {
            "voters": [
                "Budi",
                "Yudi"
            ],
            "total": 2
        },
        "Kuning": {
            "voters": [
                "Ani"
            ],
            "total": 1
        }
    },
    "summary": {
        "mostFavorite": "Merah",
        "mostFavoriteVoter": 3,
        "leastFavorite": "Kuning",
        "leastFavoriteVoter": 1,
        "totalVoters": 6
    }
}

[RULE]
1. dilarang menggunakan indexOf(), find(), filter()
2. dilarang menggunakan regex
*/
function votesParser(arr) {
    var result = { };
    
    // kode disini

    return JSON.stringify(result, null, 4)
}


console.log(votesParser([
    'Andy,Javascript',
    'Dany,Groovy',
    'Tony,Dart',
    'Karina,Java',
    'Valdo,Javascript',
    'Pipi,Python',
    'Wika,Javascript',
    'Dimas,Dart',
    'Rony,Javascript',
    'Budi,Groovy',
    'Mickey,Python',
    'Heri,Javascript',
    'Handoko,Groovy',
    'Willy,Dart',
    'Uwi,Javascript',
    'Dudi,Java',
    'Dewi,Javascript',
    'Yoyo,C#'
]))

// {
//     "keys": {
//         "Javascript": {
//             "voters": [
//                 "Andy",
//                 "Valdo",
//                 "Wika",
//                 "Rony",
//                 "Heri",
//                 "Uwi",
//                 "Dewi"
//             ],
//             "total": 7
//         },
//         "Groovy": {
//             "voters": [
//                 "Dany",
//                 "Budi",
//                 "Handoko"
//             ],
//             "total": 3
//         },
//         "Dart": {
//             "voters": [
//                 "Tony",
//                 "Dimas",
//                 "Willy"
//             ],
//             "total": 3
//         },
//         "Java": {
//             "voters": [
//                 "Karina",
//                 "Dudi"
//             ],
//             "total": 2
//         },
//         "Python": {
//             "voters": [
//                 "Pipi",
//                 "Mickey"
//             ],
//             "total": 2
//         },
//         "C#": {
//             "voters": [
//                 "Yoyo"
//             ],
//             "total": 1
//         }
//     },
//     "summary": {
//         "mostFavorite": "Javascript",
//         "mostFavoriteVoter": 7,
//         "leastFavorite": "C#",
//         "leastFavoriteVoter": 1,
//         "totalVoters": 18
//     }
// }

console.log(votesParser([
    'Budi,Durian',
    'Tony,Apel',
    'Yoga,Durian',
    'Valdo,Rambutan',
    'Pipi,Rambutan',
    'Wika,Apel',
    'Dimas,Apel',
    'Rony,Durian',
    'Dedi,Apel',
    'Mickey,Pisang',
    'Kurniawan,Pisang',
    'Handoko,Pisang',
    'Willy,Pisang',
    'Dewi,Pisang'
]))

// {
//     "keys": {
//         "Durian": {
//             "voters": [
//                 "Budi",
//                 "Yoga",
//                 "Rony"
//             ],
//             "total": 3
//         },
//         "Apel": {
//             "voters": [
//                 "Tony",
//                 "Wika",
//                 "Dimas",
//                 "Dedi"
//             ],
//             "total": 4
//         },
//         "Rambutan": {
//             "voters": [
//                 "Valdo",
//                 "Pipi"
//             ],
//             "total": 2
//         },
//         "Pisang": {
//             "voters": [
//                 "Mickey",
//                 "Kurniawan",
//                 "Handoko",
//                 "Willy",
//                 "Dewi"
//             ],
//             "total": 5
//         }
//     },
//     "summary": {
//         "mostFavorite": "Pisang",
//         "mostFavoriteVoter": 5,
//         "leastFavorite": "Rambutan",
//         "leastFavoriteVoter": 2,
//         "totalVoters": 14
//     }
// }

