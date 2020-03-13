'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;

  class Todo extends Model {

  }

  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Title is required"
        }
      }
    },
    description: DataTypes.TEXT,
    UserId: DataTypes.INTEGER
  }, {
    sequelize, modelName: "Todo"
  });
  Todo.associate = function (models) {
    // associations can be defined here
  };

  Todo.fillable = function () {
    return ['title', 'description'];
  }

  return Todo;
};