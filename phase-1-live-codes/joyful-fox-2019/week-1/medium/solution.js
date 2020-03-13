function insertionSort(boards) {
    for (let i = 0; i < boards.length; i++) {
        let hold = boards[i];
        let j;
        for (j = i - 1; boards[j] > hold; j--) {
            boards[j + 1] = boards[j];
        }
        boards[j + 1] = hold;
    }
}

function aggregate (boards) {
    foundSame = true;
    let i = 0;
    while (foundSame) {
        if(boards[i] === boards[i + 1]) {
            boards.splice(i, 2, (boards[i] + boards[i + 1]));
            insertionSort(boards);
            i = 0;
        } else {
            i ++;
            if (!boards[i]) {
                break;
            }
        }
    }
    return boards;
}

// DRIVE CODE
const boards = [1, 2, 1, 1, 2, 2, 1, 8, 16, 32, 8];
// const boards = [4, 2, 1, 1];
// const boards = [2, 2, 2, 2, 2, 2, 2, 2];
insertionSort(boards);
console.log(aggregate(boards));