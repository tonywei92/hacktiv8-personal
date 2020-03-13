function tree(start, level, search) {

	count = 0

	let board = []
	board.push([start])
	board.push([start, start])

	if(start % search == 0) {
		count += 3
	}

	for(let i=2; i<level; i++) {
		let row = []

		let previous = board[i-1]

		//head 
		row.push(previous[0])
		if(previous[0] % search == 0) {
			count += 1
		}

		for(let j=0; j<previous.length-1; j++) {
			let num = previous[j] + previous[j+1]
			row.push(num)
			if(num % search == 0) {
				count += 1
			}
		}

		//tail 
		row.push(previous[previous.length-1])
		if(previous[previous.length-1] % search == 0) {
			count += 1
		}

		board.push(row)
	}

	return count
	
	// return board[board.length-1].join('-')
}

console.log(tree(1, 6, 3))  //3
console.log(tree(1, 6, 2))  //6

console.log(tree(1, 8, 3))  //9
console.log(tree(1, 8, 8))  //0

console.log(tree(5, 6, 5))  //21
console.log(tree(5, 6, 10))  //6
