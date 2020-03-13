let dataPerson = [{
    name: 'Alan',
    bloodType: '',
    status: ''
}, {
    name: 'Bolt',
    bloodType: '',
    status: ''
}, {
    name: 'Charly',
    bloodType: '',
    status: ''
}, {
    name: 'Daniel',
    bloodType: '',
    status: ''
}, {
    name: 'Ester',
    bloodType: '',
    status: ''
}, {
    name: 'Frans',
    bloodType: '',
    status: ''
}, {
    name: 'George',
    bloodType: '',
    status: ''
}, {
    name: 'Hans',
    bloodType: '',
    status: ''
}, {
    name: 'Intan',
    bloodType: '',
    status: ''
}, {
    name: 'Jack',
    bloodType: '',
    status: ''
}, {
    name: 'Kyle',
    bloodType: '',
    status: ''
}, {
    name: 'Laura',
    bloodType: '',
    status: ''
}, {
    name: 'Mona',
    bloodType: '',
    status: ''
}, {
    name: 'Nancy',
    bloodType: '',
    status: ''
}, {
    name: 'Oliver',
    bloodType: '',
    status: ''
}, {
    name: 'Patrick',
    bloodType: '',
    status: ''
}, {
    name: 'Queen',
    bloodType: '',
    status: ''
}, {
    name: 'Rust',
    bloodType: '',
    status: ''
}, {
    name: 'Scala',
    bloodType: '',
    status: ''
}, {
    name: 'Tesla',
    bloodType: '',
    status: ''
}, {
    name: 'Uranium',
    bloodType: '',
    status: ''
}, {
    name: 'Vans',
    bloodType: '',
    status: ''
}, {
    name: 'Wick',
    bloodType: '',
    status: ''
}, {
    name: 'Xavier',
    bloodType: '',
    status: ''
}, {
    name: 'Yongki',
    bloodType: '',
    status: ''
}, {
    name: 'Zend',
    bloodType: '',
    status: ''
} ]

let recipient = ["B","C","`E`", "G", "K", "M", "Q", "S", "W"];
let donor = ["A", "D", "F", "H", "I", "J", "L", "N", "O", "P", "R", "T", "U", "V", "X", "Y", "Z"];

let listBlood = {
    "A" : ["O", "Q", "S", "U", "W", "Y"] ,
    "B" : ["N", "P", "R", "T", "V", "X"],
    "AB" : ["B", "D", "F", "H", "J", "L","K"],
    "O" : ["A", "C", "E", "G", "I", "M", "Z"]
}
    
let donorMatcher = {
    "A": ["A", "AB"],
    "B": ["B", "AB"],
    "AB": ["AB"],
    "O": ["A", "B", "AB", "O"]
}
    

let listDonor = [];
let listRecipient = [];

let keysBlood = Object.keys(listBlood);
for (let i=0; i<keysBlood.length; i++) {
    for (let j=0; j<dataPerson.length; j++) {
        let name = dataPerson[j].name;
        if (listBlood[keysBlood[i]].indexOf(name[0]) !== -1) {
            dataPerson[j].bloodType = keysBlood[i]
            dataPerson[j]["rest"] = 0;
            dataPerson[j].status = true;
            dataPerson[j].life = 2;
        }
    }
}


for (let i=0; i<donor.length; i++) {
    let check = donor[i];
    for (let j=0; j<dataPerson.length; j++) {
        let name = dataPerson[j].name;
        if (check == name[0]) {
            listDonor.push(dataPerson[j])
        }
    }
}

for (let i=0; i<recipient.length; i++) {
    let check = recipient[i];
    for (let j=0; j<dataPerson.length; j++) {
        let name = dataPerson[j].name;
        if (check == name[0]) {
           listRecipient.push(dataPerson[j])
        }
    }
}

let timeLife = 30;
for (let i=1; i<=timeLife; i++) {
    for (let j=0; j<listRecipient.length; j++) {
        let bloodRecipient = listRecipient[j].bloodType;
        let life = listRecipient[j].life;
        let match = donorMatcher[bloodRecipient];
        let flag = true;
        if (life > 0) {
            for (let k=0; k<listDonor.length; k++) {
                if (match.indexOf(listDonor[k].bloodType) !== -1 && listDonor[k].rest == 0 && listDonor[k].life > 0) {
                    // console.log("Use Donor")
                    listDonor[k].life -= 1
                    listDonor[k].rest = 4;
                    flag = false
                    break;
                }
            }

            if (flag == true) {
                listRecipient[j].life -= 1;
            }
        }

       
    }

    for (let j=0; j<listDonor.length; j++) {
       let rest = listDonor[j].rest; 
       if (rest > 0) {
           listDonor[j].rest -= 1
       }
    }

    if (i%7 == 0) {
        let output = [];
        for (let j=0; j<listDonor.length; j++) {
            let life = listDonor[j].life;
            if (life == 0) {
                let a = listRecipient.splice(j,1)
                output.push(a)
            }
        }

        for (let j=0; j<listRecipient.length; j++) {
            let life = listRecipient[j].life;
            if (life == 0) {
                let a = listRecipient.splice(j,1);
                output.push(a)
            }
        }

        console.log(`List Person dead this week : `)
        for (let j=0; j<output.length; j++) {
            for (let k=0; k<output[j].length; k++) {
                console.log(`${output[j][k].name}`)
            }
        }
    }
}



function theRemaining() {
    let output = [];
    for (let j = 0; j<listDonor.length; j++) {
        let life = listDonor[j].life;
        if (life > 0) {
            output.push(listDonor[j].name)
        }
    }
    
    for (let j = 0; listRecipient.length; j++) {
        let life = listRecipient[j].life;
        if (life > 0) {
            output.push(listRecipient[j].name)
        }
    } 
    console.log("\n")
    console.log("List Person still alive : ")
    console.log(`${output.join("\n")}`)
}

theRemaining();