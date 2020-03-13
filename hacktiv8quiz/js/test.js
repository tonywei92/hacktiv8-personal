var listOfPersons = [
  {
  id: 1,
  "first name": "Andy",
  lastname: "Klouz",
  email: "andy0@gmail.com",
  gender: "Male",
  age: 33,
  score: 80
},
{
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


function groupByGender(persons){
 var result = { };
 var sum = 0;
 for(var i = 0; i< persons.length;i++){
   sum +=persons[i].score;
   if(result[persons[i].gender] === undefined){
    result[persons[i].gender] = [];
   }
   result[persons[i].gender].push(
     {
      "first name": persons[i]["first name"],
      last_name : persons[i]["last_name"],
      email: persons[i].email,
      age: persons[i].age
   }
   );
   result.avg = sum / persons.length;
 }

 console.log(result);
}

console.log(groupByGender(listOfPersons));