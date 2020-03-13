'use strict';

const data = require('./data.js');

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

class Boogle {
    constructor(size = 4) {
        this.makeBoard(size);
        this.stack = [];
        this.direction = [
            [-1, 0], // top
            [-1, 1], // top-right
            [0, 1], // mid-right
            [1, 1], // bot-right
            [1, 0], // bot
            [1, -1], // bot-left
            [0, -1], // mid-left
            [-1, -1], // top-left
        ];

        this.words = [];
        this.depth = -1;
        this.backToParent = 0;
    }

    makeBoard(size) {
        this.board = [
            ['Z', 'Z', 'Z', 'Z'],
            ['Z', 'A', 'D', 'Z'],
            ['Z', 'B', 'A', 'Z'],
            ['Z', 'Z', 'Z', 'Z']
        ];

        // for(let i = 0; i < size; i++) {
        //   this.board.push([]);

        //   for(let j = 0; j < size; j++) {
        //     this.board[i].push(String.fromCharCode(Math.floor(Math.random() * (91-65)) + 65));
        //   }
        // }

        console.table(this.board);
    }

    game(y = 0, x = 0, skip = 0) {
        this.depth++;

        // if depth is 0, it is in parent node
        if (this.depth == 0) {

            for (let i = y; i < this.board.length; i++) {
                for (let j = x; j < this.board.length; j++) {

                    for (let dir = 0; dir < 8; dir++) {

                        // reset stack because arrived back at the parent node
                        this.stack = [];

                        // this push will always be on the first index
                        if (!this.existInStack(i, j)) this.stack.push([this.board[i][j], i, j, false]);
                        this.checkInsertWord();

                        let targetPos = this.getTargetPos(dir, i, j);

                        if (this.canMove(targetPos)) {
                            this.game(targetPos.targetY, targetPos.targetX);
                        }
                    }
                }
            }
        }
        else {
            // not in parent node, move only from direction
            if (!this.existInStack(y, x)) this.stack.push([this.board[y][x], y, x, false]);
            this.checkInsertWord();

            for (let dir = 0; dir < 8; dir++) {

                let targetPos = this.getTargetPos(dir, y, x);

                if (this.canMove(targetPos)) {
                    this.game(targetPos.targetY, targetPos.targetX);
                    this.depth--;
                }
            }

            let index = this.getStackIndex(y, x);
            this.stack[index][3] = true;
        }

        if (this.words.length > 0) return this.words;
        else return 'No word found';
    }

    canMove(targetPos, deleted = false) {
        if (this.board[targetPos.targetY]) {
            if (this.board[targetPos.targetY][targetPos.targetX]) {
                if (!this.existInStack(targetPos.targetY, targetPos.targetX, deleted)) return true;
            }
        }

        return false;
    }

    existInStack(y, x, deleted = false) {
        let index = false;

        for (let i = this.stack.length - 1; i >= 0; i--) {
            if (y == this.stack[i][1] && x == this.stack[i][2]) {
                index = i;
                break;
            }
        }

        if (this.stack[index]) {
            if (deleted == this.stack[index][3]) return true;
        }

        return false;
    }

    getStackIndex(y, x) {
        for (let index in this.stack) {
            if (y == this.stack[index][1] && x == this.stack[index][2]) return index;
        }

        return false;
    }

    getTargetPos(dir, y, x) {
        let pos = {
            targetY: y + this.direction[dir][0],
            targetX: x + this.direction[dir][1]
        }

        return pos;
    }

    // if stack has more than 1 char, check if a 
    checkInsertWord() {
        if (this.stack.length > 1) {
            let tempWord = this.getStrFromStack();
            // if the same word is found on data.js and not yet in this.words
            if (data['words'].indexOf(tempWord) != -1 && this.words.indexOf(tempWord) == -1) {
                this.words.push(tempWord);
            }
        }
    }

    getStrFromStack() {
        let word = '';

        for (let i in this.stack) {
            if (!this.stack[i][3]) word += this.stack[i][0];
        }

        return word;
    }
}

let boogle = new Boogle();

console.log(`Words found:`);
let start = (new Date).getTime();
console.table(boogle.game());
let diff = (new Date).getTime() - start;
diff /= 1000;
console.log(`boogle.game() execution finished in: ${diff}s`);