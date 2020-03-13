function matchExpectations(user, targetUser) {
    const totalTraits = user.expectation.length + targetUser.traits.length;
    const uniqueTraits = new Set(user.expectation.concat(targetUser.traits));

    const totalTraitsTarget = targetUser.expectation.length + user.traits.length;
    const uniqueTraitsTarget = new Set(targetUser.expectation.concat(user.traits));
    let usermatch = false;
    let targetuserMatch = false;
    if (totalTraits > uniqueTraits.size) {
        usermatch = true;
    }

    if (totalTraitsTarget > uniqueTraitsTarget.size) {
        targetuserMatch = true;
    }
    const userMatch = ((totalTraits - uniqueTraits.size) * 100) / user.expectation.length

    if (usermatch && targetuserMatch) {
        return {
            user: userMatch.toFixed(2)
        };
    }
    return false;
}

function tinderApps(people) {
    const result = {}
    for (let i = 0; i < people.length; i++) {
        result[people[i].name] = {};
        const matches = [];
        for (let j = 0; j < people.length; j++) {
            if (i !== j && people[i].gender !== people[j].gender) {
                const match = matchExpectations(people[i], people[j]);
                if (match) {
                    result[people[i].name][people[j].name] = `Expectation match ${match.user}`;
                    matches.push(people[j].name);
                }
            }
        }

        if (matches.length === 0)
            result[people[i].name].status = 'Belum dapat match';
        else
            result[people[i].name].status = `Match dengan ${matches.join(', ')}`
    }

    return result;
}

console.log(tinderApps([
    { name: 'Andre', gender: 'Men', traits: ['Dewasa', 'Tampan'], expectation: ['Cantik', 'Jujur', 'Kaya'] },
    { name: 'Marsya', gender: 'Women', traits: ['Cantik', 'Kaya'], expectation: ['Kaya', 'Olahragawan'] },
    { name: 'Dimas', gender: 'Men', traits: ['Pintar', 'Kaya'], expectation: ['Cantik', 'Pintar'] },
    { name: 'Bella', gender: 'Women', traits: ['Cantik', 'Pintar'], expectation: ['Pintar', 'Jujur'] }
]))



console.log(tinderApps([
    { name: 'Giant', gender: 'Men', traits: ['Kaya', 'Tampan'], expectation: ['Pintar', 'Kuat'] },
    { name: 'Shizuka', gender: 'Women', traits: ['Cantik', 'Pintar', 'Imut'], expectation: ['Sederhana', 'Jujur'] },
    { name: 'Nobita', gender: 'Men', traits: ['Pintar', 'Jujur'], expectation: ['Pintar', 'Imut', 'Rajin'] },
    { name: 'Doremi', gender: 'Women', traits: ['Cantik', 'Pintar'], expectation: ['Pintar', 'Jujur', 'Kaya', 'Tampan'] },
    { name: 'Sakura', gender: 'Women', traits: ['Kuat', 'Sederhana'], expectation: ['Jujur', 'Tampan'] }
]))
