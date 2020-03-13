'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Member extends Model {
    get level() {
      if (this.exp > 3000) {
        return 5;
      }
      else if (this.exp > 2000) {
        return 4;
      }
      else if (this.exp > 1500) {
        return 3;
      }
      else if (this.exp > 1000) {
        return 2;
      }
      else {
        return 1;
      }
    }

    static findGoldMembers() {
      return Member.findAll({ where: { type: "gold" }, include: sequelize.models.Tag });
    }
  }
  Member.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    age: DataTypes.INTEGER,
    exp: DataTypes.INTEGER,
    type: DataTypes.STRING
  }, {
    sequelize,
    hooks: {
      beforeCreate: (member, options) => {
        member.username = member.firstName + member.lastName + member.age;
        member.type = "free";
        member.exp = 0;
      }
    }
  });
  Member.associate = function (models) {
    Member.hasMany(models.Tag);
  };
  return Member;
};