const generateMonster = require("./helpers/generateMonster")
const Trainer = require("./models/Trainer")
const Monster = require("./models/Monster")
const randomNumber = require("./helpers/randomNumber")
const {
  viewSuccess, 
  viewError, 
  viewNotfound
} = require("./View")
module.exports = {
  getTotalTypePokemonEachUser() {
    Trainer.getTotalTypePokemonForEachUser((err, rows) => {
      if (err) {
        viewError(err)
      } else {
        viewSuccess(rows)
      }
    })
  },
  getRankTop2to4MonstersWithNameLikeTle() {
    Monster.getRankTop2to4MonstersWithNameLikeTle((err, rows) => {
      if (err) {
        viewError(err)
      } else {
        viewSuccess(rows)
      }
    })
  },
  getTrainersWhoHave5MonstersWithAverageLevel6() {
    Trainer.getTrainersWhoHave5MonstersWithAverageLevel6((err, rows) => {
      if (err) {
        viewError(err)
      } else {
        viewSuccess(rows)
      }
    })
  },
  catch(option) {
    Trainer
      .findOne({
        whereField: "username",
        valueField: option.username
      }, (err, trainer) => {
        if (err) {
          viewError(err)
        } else {
          if (trainer) {
            const newMonster = new Monster(generateMonster({
              TrainerId: trainer.id,
              species: option.species,
              type: option.type
            }))
            console.log(newMonster)
            newMonster
              .save((err) => {
                if (err) {
                  viewError(err)
                } else {
                  viewSuccess(`
                    Success catch new ${newMonster.type} type monster with details:
                    Species: ${newMonster.species}
                    Level: ${newMonster.level}
                    hp: ${newMonster.hp}
                    attack: ${newMonster.attack}
                    speed: ${newMonster.speed}
                  `)
                }
              })
          } else {
            viewNotfound(`
              Trainer Not Found
            `)
          }
        }
      })
  },
  trade(option) {
    const {
      monster1,
      monster2
    } = option
    Monster
      .findOne({
        whereField: "id",
        valueField: monster1
      }, (err, monster1) => {
        if (err) {
          viewError(err)
        } else {
          if (monster1) {
            Monster
              .findOne({
                whereField: "id",
                valueField: monster2
              }, (err, monster2) => {
                if (err) {
                  viewError(err)
                } else {
                  if (monster2) {
                    if (monster1.TrainerId !== monster2.TrainerId) {
                      // UPDATEEEEEEEEE
                      const tempTrainerId = monster1.TrainerId
                      monster1.TrainerId = monster2.TrainerId
                      monster2.TrainerId = tempTrainerId
                      monster1.save((err) => {
                        if (err) {
                          viewError(err)
                        } else {
                          monster2.save((err) => {
                            if (err) {
                              viewError(err)
                            } else {
                              viewSuccess(`
                                SUCCESSFULLY TRADING!
                                Monster with id ${monster1.id} now belongsTo trainer with id ${monster1.TrainerId}
                                  AND
                                Monster with id ${monster2.id} now belongsTo trainer with id ${monster2.TrainerId}

                              `)
                            }
                          }) 
                        }
                      })
                    } else {
                      viewError("transaction error due to same trainer")
                    }
                  } else {
                    viewNotfound("monster 2 not found")
                  }
                }
              })
          } else {
            viewNotfound("monster 1 not found")
          }
        }
      })
  },
  train(option) {
    Trainer
      .findOne({
        whereField: "username",
        valueField: option.username
      }, (err, trainer) => {
        if (err) {
          viewError(err)
        } else {
          if (trainer) {
            Monster.findOne({
              whereField: "id",
              valueField: option.monsterId
            }, (err, monster) => {
              if (err) {
                viewError(err)
              } else {
                if (monster) {
                  if (monster.TrainerId === trainer.id) {
                    monster.experience += randomNumber(10, 20)
                    if (monster.experience >= 100) {
                      monster.experience = 0
                      monster.hp += randomNumber(100, 200)
                      monster.attack += randomNumber(10, 20)
                      monster.speed += randomNumber(10, 20)
                      monster.level += 1
                      monster.save((err) => {
                        if (err) {
                          viewError(err)
                        } else {
                          viewSuccess(`
                            Monster level up!
                            ${monster.species} now level ${monster.level}
                          `)
                        }
                      })
                    } else {
                      monster.save((err) => {
                        if (err) {
                          viewError(err)
                        } else {
                          console.log(monster)
                          viewSuccess(`
                            Success train monster!
                            ${monster.species} now need ${100 - monster.experience}% to level up
                          `)
                        }
                      })
                    }
                  } else {
                    viewError(`This monster doesn't belongs to ${trainer.fullName}`)
                  }
                  
                } else {
                  viewNotfound("Monster not found")
                }
              }
            })
          } else {
            viewNotfound("Trainer not found")
          }
        }
      })
  }
}