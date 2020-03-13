function generateBox(dimensi) {
	let total = dimensi * dimensi
	let board = []
	let chars = "abcdefghijklmnopqrstuvwxyz"

	for(let r=0; r<total;r++) {
		let row = []
		for(let c=0; c<total;c++) {
			let randomIdx = Math.floor(Math.random() * 26); 
			row.push(chars[randomIdx])
		}
		board.push(row)
	}
	return board
}

console.log(generateBox(3))