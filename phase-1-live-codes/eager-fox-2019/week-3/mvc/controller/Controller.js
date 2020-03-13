const Player = require('../models/Player')
const Team = require('../models/Team')
const View = require('../view/index')

class Controller {
  static register(option) {
    
    Team.findOne({whereField: 'id', whereValue: option.TeamId}, function(err, team) {
      if(err) {
        View.displayError(err)
      } else if(!team) {
        View.displayError(`Team with id ${option.TeamId} does not exist`)
      } else {
        Player.create(option, function(err, player) {
          if(err) {
            View.displayError(err)
          } else {
            View.displaySuccess(`${player.name} succes move to ${team.name} this season !`)
          }
        })
      }
    })
  }

  static sellPlayer(options) {
    const { teamId, playerId } = options
    Player.findOne({ whereField: 'id', whereValue: playerId}, function(err,player) {
      if(err) {
        View.displayError(err)
      } else if(!player) {
        View.displayError('Player did not exist!')
      } else {
        const currentTeam = player.TeamId
        if(currentTeam === teamId) {
          View.displayError('Buyer and Seller should be a different Team')
        } else {
          Team.findOne({ whereField: 'id', whereValue: teamId}, function(err, data) {
            if(err) {
              View.displayError(err)
            } else if(!data) {
              View.displayError('Team did not exist!')
            } else {
              const playerPrice = player.monthlySalary * player.contractDuration
              if(playerPrice > data.balance) {
                View.displayError('Team cannot buy this player, money needed : ' + (playerPrice - data.balance))
              } else {
                Team.update({ 
                  whereField: 'id',
                  whereValue: teamId,
                  updatedField: 'balance',
                  updatedValue: data.balance - playerPrice
                }, function (err) {
                  if(err) {
                    View.displayError(err)
                  } else {
                    Team.findOne({ whereField: 'id', whereValue: currentTeam}, function(err, data2) {
                      if(err) {
                        View.displayError(err)
                      } else {
                        Team.update({ 
                          whereField: 'id',
                          whereValue: currentTeam,
                          updatedField: 'balance',
                          updatedValue: data2.balance + playerPrice
                        }, function (err) {
                          if(err) {
                            View.displayError(err)
                          } else {
                            Player.update({
                              whereField: 'id', 
                              whereValue: playerId,
                              updatedField: 'TeamId',
                              updatedValue: teamId
                            }, function(err) {
                              View.displaySuccess(`${player.name} move to ${data.name} this season!`)
                            })
                          }
                        })
                      }
                    })
                  }
                })
              }
            }
          })
        }
      }
    })
  }

  static payday(id) {
    Team.findOne({whereField: 'id', whereValue: id}, (err, team) => {
      if(err) {
        View.displayError(err)
      } else {
        if(!team) {
          View.displayError('Team does not exist')
        } else {
          Team.totalSalary(id, (err, data) => {
            if(data[0].totalSalary < team.balance) {
              Team.update({
                whereField: 'id',
                whereValue: id,
                updatedField: 'balance',
                updatedValue: team.balance - data[0].totalSalary
              }, function(err) {
                if(err) {
                  View.displayError(err)
                } else {
                  View.displaySuccess(`${team.name} spent ${team.balance} for payday`)
                }
              })
            } else {
              View.displayError(`${team.name} need more money ${data[0].totalSalary - team.balance} to pay players!`)
            }
          })
        }
      }
    })
  }

  static showPlayers() {
    Player.findAll(function(err, data) {
      console.log(data)
    })
  }

  static showTeam() {
    Team.findAll(function(err, data) {
      console.log(data);
      Player.findAll(function(err, data2) {
        console.log(data2)
      })
    })
  }
  
}

module.exports = Controller