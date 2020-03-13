'use strict';
module.exports = (sequelize, DataTypes) => {
  // const Sequelize = sequelize.Sequelize
  const { Model } = sequelize.Sequelize

  class Player extends Model {}

  Player.init({
    name: {
      type : DataTypes.STRING,
      allowNull: false,
      validate : {
        notNull: true,
        notEmpty: true, 
      }
    },
    position: {
      type : DataTypes.STRING,
      allowNull: false,
      validate : {
        notNull: true,
        notEmpty: true,
        isIn: [['Goalkeeper', 'Chaser', 'Beater', 'Seeker']],  
      }
    },
  }, {
    sequelize,
    timestamps : false,
  })

  Player.associate = function(models) {
    Player.belongsTo(models.User)
  };
  return Player;
};