let dataPerson = {
    A: ['Olive', 'Queen', 'Scala', 'Uranium', 'Wick', 'Yongki'],
    B: ['Nancy', 'Patrick', 'Rust', 'Tesla', 'Vans', 'Xavier'],
    AB: ['Bolt', 'Daniel', 'Frans', 'Hans', 'Jack', 'Laura'],
    O: ['Alan', 'Charly', 'Ester', 'George', 'Intan', 'Mona', 'Zend']
}

<<<<<<< HEAD
function bloodCompability(recipient, pendonor) {
    let bloodMatcher = { 
        A: ["A", "AB"],
        B: ["B", "AB"],
        AB: ["AB"],
        O: ["A", "B", "AB", "O"]
    }
    
    
=======
function bloodCompability(korban, pendonor) {
    //your code here
>>>>>>> a1f870ccd8057e49da6a60953f038331e5e2340f
}

<<<<<<< HEAD
function tranfusionProcess(recipients, donors) {
    // your code in here;
}
 
bloodCompability("Bolt", "Alan"); // true;
bloodCompability("Charly", "Daniel"); // false;

// tranfusionProcess();
console.log(tranfusionProcess(["Bolt", "Queen"], ["Alan", "Tesla"]));
=======
console.log(bloodCompability("Bolt", "Alan"));
// true
console.log(bloodCompability("Charly", "Daniel"));
// false

function transfusionProcess(recipients, donors) {
    //your code here
}
 
console.log(transfusionProcess(["Bolt", "Queen"], ["Alan", "Tesla"]));
/*
    Bolt menerima donor dari Alan
    Queen tidak selamat
*/

console.log(transfusionProcess(["Nancy", "Frans", "Scala", "Alan"], ["Ester", "Bolt", "Rust"]))
/*
    Nancy menerima donor dari Ester
    Frans menerima donor dari BoltScala tidak selamat
    Alan tidak selamat
*/
>>>>>>> a1f870ccd8057e49da6a60953f038331e5e2340f

