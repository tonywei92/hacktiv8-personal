'use strict';
module.exports = (sequelize, DataTypes) => {

  const { Model } = sequelize.Sequelize

  class Student extends Model {}

  Student.init({
    name: {
      type : DataTypes.STRING,
      allowNull: false,
      validate : {
        notNull: true,
        notEmpty: true, 
      }
    },
    house: {
      type : DataTypes.STRING,
      allowNull: false,
      validate : {
        notNull: true,
        notEmpty: true, 
      }
    }
  }, {
    sequelize,
    timestamps : false
  })

  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};