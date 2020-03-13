function changeMe(arr) {
    for (var i = 0; i < arr.length; i++) {
        var obj ={};
        var title = (i+1) + '.' + " " + arr[i][0] + " " + arr[i][1];
        obj.firstName = arr[i][0];
        obj.lastName = arr[i][1];
        obj.gender = arr[i][2];
        if(typeof arr[i][3] === "undefined"){
            obj.age = "Invalid birth year";
        }
        else{
            obj.age = arr[i][3];
        }
        console.log(title + "\n", obj);
    }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""