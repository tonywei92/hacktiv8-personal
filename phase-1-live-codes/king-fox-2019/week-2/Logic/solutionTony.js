'use strict';
const fs = require('fs');
const command = process.argv[2];
const parameters = process.argv.slice(3);

switch (command) {
	case 'register':
		if (arguments.length === 0) {
			console.log('Welcome to start')
		}
		else {
			const name = parameters[0];
			registerPlayer(name);
		}
		break;
	case 'login':
		const name = parameters[0];
		login(name);
		break;
	case 'fight':
		fight();
		break;
	case 'save':
		saveProgress();
		break;
	case 'logout':
		logout();
		break;
}


function logout() {
	const save = loadSave();
	let name = save.currentPlayer.name;
	save.currentPlayer = {};
	saveToFile(save);
	console.log(`[${name}] has quit the game`)
}

function fight() {
	let levels = [-1, 0, 1, 2, 3]
	let lv = levels[Math.floor(Math.random() * 4) + 1]
	let save = loadSave();
	save.currentPlayer.level += lv;
	saveToFile(save);
	switch (lv) {
		case -1:
			console.log(`[${save.currentPlayer.name}] lost 1 level`)
			break;
		case 0:
			console.log(`[${save.currentPlayer.name}] survived fight, nothing was gained`)
			break;
		case 1:
			console.log(`[${save.currentPlayer.name}] won fight, gained 1 level`)
			break;
		case 2:
			console.log(`[${save.currentPlayer.name}] won fight, gained 2 level`)
			break;
		case 3:
			console.log(`[${save.currentPlayer.name}] won fight, gained 3 level`)
			break;
	}
}

function login(name) {
	const save = loadSave();
	let player = null
	for (let i = 0; i < save.players.length; i++) {
		if (save.players[i].name === name) {
			player = save.players[i];
		}
	}
	if (player) {
		save.currentPlayer = player;
		saveToFile(save);
		console.log(`Login success, welcome ${player.name} lv.${player.level}`)
	}
	else {
		console.log('player not found, you may register new player or login using another name')
	}
}

function saveProgress() {
	const save = loadSave();
	let name = save.currentPlayer.name;
	for (let i = 0; i < save.players.length; i++) {
		if (save.players[i].name === save.currentPlayer.name) {
			save.players[i] = save.currentPlayer;
			break;
		}
	}
	saveToFile(save);
	console.log(`[${name}] saved progress`);
}

function registerPlayer(name) {
	const save = loadSave();
	const players = save.players;
	let found = false;
	let player = {}
	for (let i = 0; i < players.length; i++) {
		if (players[i].name === name) {
			found = true;
			player = players[i];
			break;
		}
	}
	if (found) {
		console.log(`Already registered: ${player.name} lv. ${player.level}`)
	}
	else {
		save.players.push({
			name: name,
			level: 0
		})
		saveToFile(save);
		console.log(`Welcome new player ${name}`)
	}
}

function loadSave() {
	return JSON.parse(fs.readFileSync('./save.json', 'utf8'));
}

function saveToFile(data) {
	fs.writeFileSync('./save.json', JSON.stringify(data, null, 2));
}