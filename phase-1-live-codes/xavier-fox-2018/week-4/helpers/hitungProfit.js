function hitungProfit(sequelize, robot, options) {
  return sequelize.models.Factory.findOne({
    where: {
      id: robot.FactoryId
    }
  })
    .then((factory) => {
      if ( options.sell ) {
        factory.income +=  ( robot.price * options.sell ) + ((robot.price * 0.15) * options.sell)
      } else {
        factory.outcome += robot.price * robot.stock
      }
      factory.profit = factory.income - factory.outcome
      return factory.save()
    })
    .catch((err) => {
      throw new Error(err)
    })
}

module.exports = hitungProfit