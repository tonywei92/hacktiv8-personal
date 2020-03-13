/*
 [Instruction]
 Ubah sebuah object menjadi bentuk yg ditentukan
 */

function transformObject(persons) {
    var result = {};
    for(var i = 0; i < persons.length; i++){
        if(result[persons[i].gender] === undefined){
            result[persons[i].gender] = {
                persons: [],
                avg: 0
            }
        }
        result[persons[i].gender].persons.push({
            id: persons[i].id,
            "first name": persons[i]["first name"],
            lastname: persons[i].last_name,
            email: persons[i].email,
            age: persons[i].age,
            score: persons[i].score
        })
    }
    // TODO: top score, top scorer, avg
    for(var x in result){
        var sum = 0;
        var topScorer = "";
        var topScore = 0;
        for(var i = 0; i < result[x].persons.length; i++){
            if(topScore < result[x].persons[i].score){
                topScore = result[x].persons[i].score;
                topScorer = result[x].persons[i]["first name"] + " " + result[x].persons[i].lastname
            }
            sum += result[x].persons[i].score;            
        }
        result[x].topScore = topScore;
        result[x].topScorer = topScorer;
        result[x].avg = sum / result[x].persons.length;
    }
    return result;
}

var persons = [{
    id: 1,
    "first name": "Andy",
    last_name: "Klouz",
    email: "andy0@gmail.com",
    gender: "Male",
    age: 33,
    score: 80
}, {
    id: 2,
    "first name": "Refi",
    last_name: "Castagne",
    email: "refi@gmail.com",
    gender: "Male",
    age: 22,
    score: 75
}, {
    id: 3,
    "first name": "Irvy",
    last_name: "Florence",
    email: "irvy@gmail.com",
    gender: "Male",
    age: 24,
    score: 78
}, {
    id: 4,
    "first name": "Karin",
    last_name: "Petkens",
    email: "karin@gmail.com",
    gender: "Female",
    age: 25,
    score: 98
}, {
    id: 5,
    "first name": "Shadow",
    last_name: "Manuely",
    email: "shadow@gmail.com",
    gender: "Male",
    age: 21,
    score: 76
},
{
    id: 6,
    "first name": "Anita",
    last_name: "Manuely",
    email: "anita@gmail.com",
    gender: "MaleFemale",
    age: 21,
    score: 76
},
]

console.log(JSON.stringify(transformObject(persons),null,1));


/*
hasil:

{
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
 */