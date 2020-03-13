const arr = [3, 6, 5, 4, 7, 8, 1, 3, 2];


function generateBarChart(arr) {
  let max = Math.max(...arr);
  
  for(let i = 0; i <= max; i++) {
    let row = '';
    if(i === max) {
      row += max - i + '|';
      for(let j = 0; j < arr.length; j++) {
        row += '-(' + arr[j] + ')-';
      }
    } else {
      row += max - i + '|';
      for(let k = 0; k < arr.length; k++) {
        if(arr[k] >= (max - i)) {
          row += ' III ';
        } else {
          row += '     ';
        }
      }
    }
    
    console.log(row);
  }
}

generateBarChart(arr);