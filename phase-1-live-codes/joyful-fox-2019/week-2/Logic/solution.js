function createDrawWord(orientation, word, leftIndent, lastWord = false) {
    let singleWordDraw = '';
    for(let i = 0; i < word.length; i++) {
        if(orientation === 'right') {
            singleWordDraw += word[i];
            if(i === word.length - 1 && !lastWord) {
                singleWordDraw += '\n';
            }
        } else {
            singleWordDraw += ' '.repeat(leftIndent) + word[i];
            if(i !== word.length - 1) {
                singleWordDraw += '\n';
            }
        }
    }
    return singleWordDraw;
}

function ladderLetter(word) {
    // code here
    const words = word.split(' ');
    let draw = '';
    let leftIndent = 0;
    let orientation = 'right';

    for(let i = 0; i < words.length; i++) {
        if(orientation === 'right') {
            let lastWord = i === words.length - 1 ? true : false;
            draw += createDrawWord(orientation, words[i], leftIndent, lastWord);
            leftIndent += words[i].length - 1;
            orientation = 'bottom';
        } else {
            draw += createDrawWord(orientation, words[i], leftIndent);
            leftIndent += 1;
            orientation = 'right';
        }
    }
    console.log(draw);
}

// TEST CASE

// Release 0
ladderLetter('happy holliday');
/*
    happy
        h
        o
        l
        l
        i
        d
        a
        y
*/

// Release 1
ladderLetter('happy nice weekend');
/*
    happy
        n
        i
        c
        eweekend
*/
ladderLetter('happy birthday to you guys');
/*
    happy
        b
        i
        r
        t
        h
        d
        a
        yto
          y
          o
          uguys
*/