var result =
{
    Male:
        [{
            'first name': 'Andy',
            last_name: 'Klouz',
            email: 'andy0@gmail.com',
            age: 33
        },
        {
            'first name': 'Refi',
            last_name: 'Castagne',
            email: 'refi@gmail.com',
            age: 22
        },
        {
            'first name': 'Irvy',
            last_name: 'Florence',
            email: 'irvy@gmail.com',
            age: 24
        },
        {
            'first name': 'Shadow',
            last_name: 'Manuely',
            email: 'shadow@gmail.com',
            age: 21
        }],
    Female:
        [{
            'first name': 'Karin',
            last_name: 'Petkens',
            email: 'karin@gmail.com',
            age: 25
        },
    ],
    avg: 1231
}










var result2 = {
    "Male": {
        "persons": [
            {
                "id": 5,
                "first name": "Shadow",
                "last_name": "Manuely",
                "email": "shadow@gmail.com",
                "age": 21,
                "score": 76
            }
            ,
            ...
        ],
        "topScore": 76,
        "topScorer": "Shadow Manuely",
        "avg": 888
    },
    "Female": {
        "persons": [
            {
                "id": 4,
                "first name": "Karin",
                "last_name": "Petkens",
                "email": "karin@gmail.com",
                "age": 25,
                "score": 98
            },
            ...
        ],
        "topScore": 98,
        "topScorer": "Karin Petkens",
        "avg": 2847
    }
}


// var object = {};
// for (var i = 0; i < persons.length; i++) {
//   if (object[persons[i].gender] === undefined) {
//     object[persons[i].gender] = { persons: [] };
//   }
//   var newObj = {}
//   score = 0;
//   name = "";
//   scoreSum = 0;
//   for (person in persons[i]) {
//     if (person !== "gender") {
//       newObj[person] = persons[i][person];
//     }
//   }
//   if(score < persons[i].score){
//     score = persons[i].score;
//     name = persons[i]["first name"] + " " + persons[i].last_name;
    
//   }

//   object[persons[i].gender].persons.push(newObj);
// }

// for(genderGroup in object){
//   var maxScore = 0;
//   var scoreSum = 0;
//   for(var i= 0; i< object[genderGroup].persons.length; i++){
//     if(maxScore < object[genderGroup].persons[i].score){
//       maxScore = object[genderGroup].persons[i].score;
//     }
//     scoreSum += object[genderGroup].persons[i].score;
//   }
//   object[genderGroup].maxScore = maxScore;
//   object[genderGroup].average = scoreSum / object[genderGroup].persons.length;
// }

// console.log(JSON.stringify(object, "", "\t"));



