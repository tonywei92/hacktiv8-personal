'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Member extends Model {
    getFullname() {
      return this.firstName + ' ' + this.lastName
    }

    getLevel() {
      if(this.exp > 3000) return 5
      else if(this.exp > 2000) return 4
      else if(this.exp > 1500) return 3
      else if(this.exp > 1000) return 2
      else return 1
    }
  }

  Member.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    type: DataTypes.STRING,
    exp: DataTypes.INTEGER,
    age: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: (member, options) => {
        member.username = member.firstName+member.lastName+member.age
        member.type = 'free'
        member.exp = 0
      }
    },
    sequelize
  })

  Member.associate = function(models) {
    Member.hasMany(models.Tag)
    // Member.belongsTo(models.Tag)
  };
  return Member;
};