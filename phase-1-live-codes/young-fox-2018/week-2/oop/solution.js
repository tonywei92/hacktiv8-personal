class Character {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    this.gold = null
    this.role = 'character'
    this.pokemons = []
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  battle(character, maxPokemon) {
    let countPokemonEnemy = 0
    let countPokemonTrainer = 0
    do {
      let enemyPokemon = character.pokemons[countPokemonEnemy]
      let trainerPokemon = this.pokemons[countPokemonTrainer]
      if ( enemyPokemon.speed >= trainerPokemon.speed ) {
        if (enemyPokemon.checkHealth(enemyPokemon)) {
          enemyPokemon.attack(trainerPokemon)
          console.log(`pokemon ${enemyPokemon.name} milik ${character.fullName} berhasil menyerang pokemon ${trainerPokemon.name} milik ${this.fullName}`)
        }
        if (trainerPokemon.checkHealth(trainerPokemon)) {
          trainerPokemon.attack(enemyPokemon)
          console.log(`pokemon ${trainerPokemon.name} milik ${this.fullName} berhasil menyerang pokemon ${enemyPokemon.name} milik ${character.fullName}`)
        }
        console.log('===')
      } else {
        if (trainerPokemon.checkHealth(trainerPokemon)) {
          trainerPokemon.attack(enemyPokemon)
          console.log(`pokemon ${trainerPokemon.name} milik ${this.fullName} berhasil menyerang pokemon ${enemyPokemon.name} milik ${character.fullName}`)
        }
        if (enemyPokemon.checkHealth(enemyPokemon)) {
          enemyPokemon.attack(trainerPokemon)
          console.log(`pokemon ${enemyPokemon.name} milik ${character.fullName} berhasil menyerang pokemon ${trainerPokemon.name} milik ${this.fullName}`)
        }
      }
      if (!enemyPokemon.checkHealth(enemyPokemon)) {
        console.log('============================================')
        console.log(`${trainerPokemon.name} milik ${this.fullName} menang!`)
        console.log('============================================')
        countPokemonEnemy += 1
      }
      if (!trainerPokemon.checkHealth(trainerPokemon)) {
        console.log('============================================')
        console.log(`${enemyPokemon.name} milin ${character.fullName} menang!`)
        console.log('============================================')
        countPokemonTrainer += 1
      }
    } while ( countPokemonEnemy < maxPokemon && countPokemonTrainer < maxPokemon )
    
    let trainerGold = this.gold
    let enemyGold = character.gold
    if ( countPokemonTrainer < maxPokemon ) {
      console.log('You win the battle')
      if ( character.role === 'gym leader' ) {
        this.badges.push( character.badge )
        this.gold += 0.8 * enemyGold
        character.gold -= 0.8 * trainerGold
      } else {
        this.gold -= 0.8 * enemyGold 
        character.gold += 0.8 * trainerGold
      }
    } else {
      console.log('You lose the battle')
        this.gold -= 0.5 * enemyGold 
        character.gold += 0.5 * trainerGold
    }
  }
}

class Trainer extends Character {
  constructor(firstName, lastName, gold) {
    super(firstName, lastName)
    this.gold = gold || 100000
    this.role = 'trainer'
    this.badges = []
  }

  catch(pokemon) {
    this.pokemons.push(pokemon)
  }

  trade(trainer, myPokemon, trainerPokemon) {
    const myPokemonIndex = this.pokemons.findIndex((pokemon) => pokemon.name === myPokemon.name )
    this.pokemons.splice(myPokemonIndex, 1)
    const trainerPokemonIndex = trainer.pokemons.findIndex((pokemon) => pokemon.name === trainerPokemon.name )
    trainer.pokemons.splice(trainerPokemonIndex, 1)
    this.pokemons.push(trainerPokemon)
    trainer.pokemons.push(myPokemon)
  }
}

class GymLeader extends Character {
  constructor(firstName, lastName, badge, pokemons, gold) {
    super(firstName, lastName)
    this.gold = gold || 10000000
    this.role = 'gym leader'
    this.pokemons = pokemons
    this.badge = badge
  }
}

class Pokemon {
  constructor(name, hp, atk, speed, type) {
    this.name = name
    this.hp = hp
    this.atk = atk
    this.speed = speed
    this.type = type
  }

  attack(pokemon) {
    let atk = this.atk
    pokemon.hp -= atk
  }

  checkHealth(pokemon) {
    return pokemon.hp > 0 ? true : false
  }
}

const bulbasaur = new Pokemon('Bulbasaur', 30000, 3000, 50, 'grass')
const charmender = new Pokemon('Charmender', 14000, 3500, 30, 'fire' )
const squirtle = new Pokemon('Squirtle', 6000, 500, 40, 'water')

const ash = new Trainer('Ash', 'Ketchum', 200000)
const claire = new Trainer('Claire', 'Dragon', 200000)
const brock = new GymLeader('Mr', 'Brock', 'rock stone', [ charmender, squirtle ])

ash.catch(charmender)
ash.catch(squirtle)
claire.catch(bulbasaur)

ash.trade(claire, charmender, bulbasaur)
ash.battle(brock, 2)
// console.log(ash)
// console.log(brock)