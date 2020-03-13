'use strict';
const fs = require('fs');
const command = process.argv[2];
const parameters = process.argv.slice(3);
const data = fs.readFileSync('../Logic/save.json', 'utf8')
const dataPlayer = JSON.parse(data)

switch (command) {
	case 'register': registerPlayer(parameters)
		// do something
		break;
	case 'login': login(parameters)
		// do something
		break;
	case 'fight': fight()
		// do something
		break;
	case 'save': saveProgress()
		// do something
		break;
	case 'logout': logout()
		// do something
		break;
	default: console.log(`node index.js register [playername]`)
}


function registerPlayer(player) {
	// code here
	if (player.length < 1) {
		console.log(`register Welcome to AdventureGame, please input register [playerName]`)
	} else {
		for (let i = 0; i < dataPlayer['players'].length; i++) {
			if (dataPlayer['players'][i]['name'] == player[0]) {
				console.log(`Already registerd: ${player[0]} lv. ${['players'][i]['level']}`)
				return
			}
		}
		dataPlayer['players'].push({ name: player[0], level: 0 })
		fs.writeFileSync('./save.json', JSON.stringify(dataPlayer, null, 2), 'utf8')
		console.log(`Welcome new player ${player[0]}!`)
	}
}

function login(name) {
	// code here
	for (let i = 0; i < dataPlayer['players'].length; i++) {
		if (dataPlayer['players'][i]['name'] != name[0]) {
			console.log(`Player not found, you may register new player or login using another name`)
			return
		} else {
			dataPlayer['currentPlayer'] = { name: dataPlayer['players'][i]['name'], level: dataPlayer['players'][i]['level'] }
			fs.writeFileSync('./save.json', JSON.stringify(dataPlayer, null, 2), 'utf8')
			console.log(`Login success, welcome ${name[0]} lv. ${dataPlayer['currentPlayer']['level']}`)
			return
		}
	}
}

function fight() {
	// code here
	const acak = Math.floor(Math.random() * 5) - 1
	if (acak == -1) {
		dataPlayer['currentPlayer']['level'] -= acak
		console.log(`untuk ${acak} ${dataPlayer['currentPlayer']['name']} lost fight, lost 1 level`)
		return dataPlayer
	} else if (acak == 0) {
		console.log(`untuk ${acak} ${dataPlayer['currentPlayer']['name']} survived fight, nothing was gained`)
		return dataPlayer
	} else if (acak == 1) {
		dataPlayer['currentPlayer']['level'] += acak
		console.log(`untuk ${acak} ${dataPlayer['currentPlayer']['name']} won fight, gained ${acak} level`)
		return dataPlayer
	} else {
		dataPlayer['currentPlayer']['level'] += acak
		console.log(`untuk ${acak} ${dataPlayer['currentPlayer']['name']} won fight, gained ${acak} levels`)
		return dataPlayer
	}
}

function saveProgress() {
	// code here
	const letsFight = fight()
	fs.writeFileSync('./save.json', JSON.stringify(letsFight, null, 2), 'utf8')
	console.log(`saved progress..`)
	return
}

function logout() {
	// code here
	console.log(`${dataPlayer['currentPlayer']['name']} has quit game.`)
	dataPlayer['currentPlayer'] = {}
	fs.writeFileSync('./save.json', JSON.stringify(dataPlayer, null, 2), 'utf8')
}

function loadFromFile() {
	// code here
}

function saveToFile(data) {
	// code here
}

