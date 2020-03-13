'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  const Op = sequelize.Op;
  class Tag extends Model {

  }
  Tag.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Tag tidak boleh kosong'
        }
      }
    },
    MemberId: DataTypes.INTEGER
  }, {
    sequelize, validate: {
      canAddMoreThanThree() {
        const Member = sequelize.models.Member;
        const Tag = sequelize.models.Tag;
        return Member.findOne({
          where: {
            id: this.MemberId
          }
        })
          .then(member => {
            console.log('zzzzzzzzzzzzz', member.type)
            if (member.type === "free") {
              return Tag.findAll({
                where: {
                  MemberId: this.MemberId
                }
              })
                .then(tags => {
                  if (tags.length === 3) {
                    throw new Error('Free member can create max 3 tags')
                  }
                })
            }
          })
      }
    }
  });
  Tag.associate = function (models) {
    Tag.belongsTo(models.Member);
  };
  return Tag;
};