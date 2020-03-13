function generatePyramid(height){
  let arr = []
	for(let i=0; i<height;i++){
    let row = []
		let starLength = ( i * 2 ) + 1 
		let spaceLength = height - i 

    for(let j=0; j<spaceLength; j++){
      row.push(" ")
    }

    for(let k=0; k<starLength; k++){
      if(k==0 || k == (starLength-1) || i == height-1 ){
      row.push("*")        
      }else{
        row.push(" ")
      }
    }

    arr.push(row.join(""))
	}	

  return arr.join("\n")
}

let result = generatePyramid(10)
console.log(result)
