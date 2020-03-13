/*
================
RECIPE GENERATOR
================

[INSTRUCTION]
Function recipe generator adalah function yang berfungsi untuk mengubah input object yang diberikan , dan menghasilkan output berupa array of object sesuai dengan contoh dibawah.


[EXAMPLES]
input : 
{
  '20minutes' : {
    mainIngredient: {
      egg: [
        'Omellete'
      ]
    }
  },
  '30minutes' : {
    mainIngredient: {
      flour: [
        'Pizza',
        'Noodles',
      ],
      egg: [
        'Takoyaki'
      ]
    }
  }
}
output: 
[
  {
    name: 'Omellete',
    mainIngredient: 'egg',
    cookingTime: 20minutes
  },
  {
    name: 'Pizza',
    mainIngredient: 'flour',
    cookingTime: '30minutes'
  },
  {
    name: 'Noodles',
    mainIngredient: 'flour',
    cookingTime: '30minutes'
  },
  {
    name: 'Takoyaki',
    mainIngredient: 'egg',
    cookingTime: 30minutes
  }
]

[RULES]
- dilarang menggunakan function map, filter, reduce

*/
var cookingTimeRecipe = {
  '20minutes': {
    mainIngredient: {
      egg: ['Omellete']
    }
  },
  '30minutes': {
    mainIngredient: {
      flour: ['Pizza', 'Noodles'],
      egg: ['Takoyaki']
    }
  }
};

function recipeGenerator(obj) {
  var result = [];
  for (var time in obj) {
    for (var ingreds in obj[time].mainIngredient) {
      for (var i = 0; i < obj[time].mainIngredient[ingreds].length; i++) {
        result.push({
          name: obj[time].mainIngredient[ingreds][i],
          mainIngredient: ingreds,
          cookingtime: time
        });
      }
    }
  }
  return result;
}

console.log(recipeGenerator(cookingTimeRecipe));

/*
[
  {
    name: 'Omellete',
    mainIngredient: 'egg',
    cookingTime: 20minutes
  },
  {
    name: 'Pizza',
    mainIngredient: 'flour',
    cookingTime: '30minutes'
  },
  {
    name: 'Noodles',
    mainIngredient: 'flour',
    cookingTime: '30minutes'
  },
  {
    name: 'Takoyaki',
    mainIngredient: 'egg',
    cookingTime: 30minutes
  }
]

*/

var cookingTimeRecipe2 = {
  '40minutes': {
    mainIngredient: {
      chocolate: ['Parfait', 'Pudding']
    }
  },
  '30minutes': {
    mainIngredient: {
      milk: ['Yogurt', 'Thai Tea']
    }
  }
};

console.log(recipeGenerator(cookingTimeRecipe2));
/*
  [
    { name: 'Parfait',
      mainIngredient: 'chocolate',
      cookingTime: '40minutes' },
    { name: 'Pudding',
      mainIngredient: 'chocolate',
      cookingTime: '40minutes' },
    { name: 'Yogurt',
      mainIngredient: 'milk',
      cookingTime: '30minutes' },
    { name: 'Thai Tea',
      mainIngredient: 'milk',
      cookingTime: '30minutes' }
  ]
*/
