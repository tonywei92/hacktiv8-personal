function getMemberColor(type) {
    if (type === 'free') {
        return 'gray'
    }
    else {
        return 'yellow'
    }
}

function getTagColor(tag) {
    tag = tag.toLowerCase();
    if ('abcde'.includes(tag[0])) {
        return 'red'
    }
    if ('fghijkl'.includes(tag[0])) {
        return 'pink'
    }

    if ('mnopqrst'.includes(tag[0])) {
        return 'blue'
    }

    if ('uvwxyz'.includes(tag[0])) {
        return 'green'
    }
}

module.exports = { getMemberColor, getTagColor }