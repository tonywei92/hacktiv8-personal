class FoodViews {
    static viewSingle(food) {
        console.log('='.repeat(32))
        console.log(`${food.name} (${food.origin})`)
        console.log('='.repeat(32));
        console.log('\nBahan-bahan:');
        food.ingredients.forEach(el => {
            console.log(`(${el.id}) ${el.name} : ${el.amount}`)
        })
        console.log('\nSelamat mencoba~\n')
    }

    static viewAll(foods) {
        for (let i = 0; i < foods.length; i++) {
            console.log(`[${foods[i].id}] ${foods[i].name}`)
            console.log(`From ${foods[i].origin} with ${foods[i].ingredientsCount} ingredients`);
            console.log('-'.repeat(32));
        }
    }
}

module.exports = FoodViews;