function checkMatchBlood() {
    let dataPerson = {
        A: ["Olive", "Queen", "Scala", "Uranium", "Wick", "Yongki"],
        B: ["Nancy", "Patrick", "Rust", "Tesla", "Vans", "Xavier"],
        AB: ["Bolt", "Daniel", "Frans", "Hans", "Jack", "Laura", "Kyle"],
        O: ["Alan", "Charly", "Ester", "George", "Intan", "Mona", "Zend"]
    }
    
    let bloodMatcher = {
        A: ["A", "AB"],
        B: ["B", "AB"],
        AB: ["AB"],
        O: ["A", "B", "AB", "O"]
    }

    let recipient = ["Bolt", "Charly", "Ester", "George", "Kyle", "Mona", "Queen", "Scala", "Wick"];
    let donor = ["Alan", "Daniel", "Frans", "Hans", "Intan", "Jack", "Laura", "Nancy", "Olive", "Patrick", "Rust", "Tesla", "Uranium", "Vans", "Xavier", "Yongki", "Zend"];
    let listDonor = [];
    let listMatch = [];

    if( bloodMatcher.A == dataPerson.A || dataPerson.AB ) {
        console.log('Pendonornya A');
        donorkan = true;
    }
    // } else if( dataPerson == 'B' && (korban.dataPerson == 'B' || korban.dataPerson == 'AB')) {
    //     donorkan = true;
    // } else if( dataPerson == 'AB' && (korban.dataPerson == 'AB')) {
    //     donorkan = true;
    // } else if( dataPerson == 'O') {
    //     donorkan = true;
    // }
// console.log(dataPerson.A[2]);    
    // console.log(donor);
}

checkMatchBlood();



