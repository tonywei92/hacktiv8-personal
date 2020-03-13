'use strict'
const fs = require('fs')

main()

function main(){
	const input = process.argv.slice(2)

	if (input.length === 0){
		console.log('Welcome to AdventureGame, please input start')
		return
	}

	const command = input[0].toLowerCase()

	const saveFile = fs.readFileSync('./save.txt', 'utf8')

	switch (command){
		case 'start':
			if (input.length === 1){
				console.log('Welcome to AdventureGame, please input start [playerName]')
			} else {
				const playerName = input[1]
				// find player in save file
				start(playerName, saveFile)
			}
			break;

		case 'play':
			play(saveFile)
			break;

		case 'fight':
			fight(saveFile)
			break;

		case 'train':
			train(saveFile)
			break;

		case 'stop':
			stop(saveFile)
			break;

		case 'save':
			save(saveFile)
			break;

		case 'help':
			console.log('Available commands:\n - start [playerName]\n - play')
			break;

		default:
			console.log('Please type help for help.')
	}
	return
}

function train(saveFile){
	let objSaveFile = getCurPlayer(saveFile)

	// check if no player is playing
	if (!objSaveFile.curPlayer ){
		console.log('No player is currently playing. Please type start [playername]')
		return
	}

	let player = objSaveFile.curPlayer.split('|')
	let objPlayer = {name: player[0], level: Number(player[1])}

	let result = Math.floor(Math.random()*2)
	switch(result){
		case 1:
			result = `${objPlayer.name} trained, gained 1 level`
			objPlayer.level++
			break;
		case 0:
			result = `${objPlayer.name} trained, no level gain`
			break;
	}

	// update current player level at save.txt
	const updatedPlayer = objPlayer.name+'|'+objPlayer.level
	saveFile = updatedPlayer+'\n'+objSaveFile.playerList.join('\n')
	fs.writeFileSync('./save.txt', saveFile)

	console.log(result)
}

function save(saveFile){
	// find player and update the data
	let objSaveFile = getCurPlayer(saveFile)

	// check if no player is playing
	if (!objSaveFile.curPlayer ){
		console.log('No player is currently playing. Please type start [playername]')
		return
	}

	let player = objSaveFile.curPlayer.split('|')
	let objPlayer = {name: player[0], level: Number(player[1])}

	for (let i = 0; i < objSaveFile.playerList.length; i++){
		let curOnList = objSaveFile.playerList[i]
		const curName = curOnList.split('|')[0]

		if (curName === objPlayer.name){
			objSaveFile.playerList[i] = `${curName}|${objPlayer.level}`
			// save updated list
			const newSaveFile = objSaveFile.curPlayer+'\n'+objSaveFile.playerList.join('\n')
			fs.writeFileSync('./save.txt', newSaveFile)

			console.log(curName, 'saved progress. Now at lv.', objPlayer.level)
			break;
		}
	}
}

function stop(saveFile){
	let objSaveFile = getCurPlayer(saveFile)

	// check if no player is playing
	if (!objSaveFile.curPlayer ){
		console.log('No player is currently playing. Please type start [playername]')
		return
	}

	let player = objSaveFile.curPlayer.split('|')
	let objPlayer = {name: player[0], level: Number(player[1])}

	objSaveFile.curPlayer = ''
	const newSaveFile = objSaveFile.curPlayer+'\n'+objSaveFile.playerList.join('\n')
	fs.writeFileSync('./save.txt', newSaveFile)
	console.log(`${objPlayer.name} has quit game.`)
}

function fight(saveFile){
	let objSaveFile = getCurPlayer(saveFile)

	// check if no player is playing
	if (!objSaveFile.curPlayer ){
		console.log('No player is currently playing. Please type start [playername]')
		return
	}

	let player = objSaveFile.curPlayer.split('|')
	let objPlayer = {name: player[0], level: Number(player[1])}

	let result = Math.floor(Math.random()*5)-1
	switch(result){
		case -1:
			result = `${objPlayer.name} lost fight, lost 1 level`
			objPlayer.level--
			break;
		case 0:
			result = `${objPlayer.name} survived fight, no level gain`
			break;
		case 1:
			result = `${objPlayer.name} won fight, gain 1 level`
			objPlayer.level++
			break;
		case 2:
			result = `${objPlayer.name} won fight, gain 2 levels`
			objPlayer.level+=2
			break;
		case 3:
			result = `${objPlayer.name} won fight, gain 3 levels`
			objPlayer.level+=3
			break;
	}

	// update current player level at save.txt
	const updatedPlayer = objPlayer.name+'|'+objPlayer.level
	saveFile = updatedPlayer+'\n'+objSaveFile.playerList.join('\n')
	fs.writeFileSync('./save.txt', saveFile)

	console.log(result)
}

function play(saveFile){
	let player = getCurPlayer(saveFile).curPlayer.split('|')
	let objPlayer = {name: player[0], level: Number(player[1])}

	// check if no player is playing
	if (!objPlayer.name){
		console.log('No player is currently playing. Please type start [playername]')
		return
	}

	let message = `${objPlayer.name} now lv.${objPlayer.level}
fight to reach next level? type fight
train to reach next level? type train
`
	console.log(message)
}

function getCurPlayer(saveFile){
	// file is not empty
	let list = saveFile.split('\n')

	// get current player and list of players
	let curPlayer = list[0]
	list = list.slice(1)
	return {curPlayer: curPlayer, playerList: list}
}

function start(playerName, saveFile){
	// const saveFile = fs.readFileSync('./save.txt', 'utf8')

	// save file empty, create new player and save
	if (!saveFile || saveFile.length === 0){
		saveNewPlayer(playerName, saveFile)
		return
	}

	let fromSaveFile = getCurPlayer(saveFile)

	let curPlayer = fromSaveFile.curPlayer
	let list = fromSaveFile.playerList

	// if player is already current player, end function
	if (playerName === curPlayer.split('|')[0]){
		console.log('Continue playing for',playerName,'Lv.',curPlayer.split('|')[1])
		return
	} else {
		// find this player's name on the list,
		// and set it as current player
		for (let i = 0; i < list.length; i++){
			let savedPlayer = list[i].split('|')
			let playerLevel = Number(savedPlayer[1])
			if (savedPlayer[0] === playerName){
				// found player on the list, set to current player
				// and update the file
				updateCurPlayer(playerName, playerLevel, saveFile)
				return
			}
		}
		// player not found on list, make new player and update current player
		saveNewPlayer(playerName, saveFile)
		return
	}
}

function saveNewPlayer(playerName, newFile){
	console.log('saving new player', playerName)
	newFile += `\n${playerName}|0`
	fs.writeFileSync('./save.txt', newFile)
	console.log('new player saved, updated save.txt')
		
	updateCurPlayer(playerName,0, newFile)
}

function updateCurPlayer(playerName, playerLevel, saveFile){
	// add playerName|playerLevel to 1st line of save.txt
	const toSave = `${playerName}|${playerLevel}`
	let list = saveFile.split('\n')
	list[0] = toSave

	fs.writeFileSync('./save.txt', list.join('\n'))
	// console.log('updated current player to',playerName)
	console.log('Welcome',playerName,'Lv.',playerLevel)
}