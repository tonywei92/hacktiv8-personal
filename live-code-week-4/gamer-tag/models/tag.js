'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Tag extends Model {}

  Tag.init({
    name: DataTypes.STRING,
    MemberId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: (tag, options) => {
        // console.log(tag)
        if(tag.name == '' || tag.name == undefined) throw 'Tag tidak boleh kosong'

        let membership

        return Member.findByPk(tag.MemberId)
          .then(member => {
            membership = member.type
            
            return Tag.findAll({where: {MemberId: member.id}})
          })
          .then(tags => {
            if(membership == 'free' && tags.length > 3) throw 'free member tidak boleh membuat tags lebih dari 3'
          })
      }
    },
    sequelize
  })

  Tag.associate = function(models) {
    Tag.belongsTo(models.Member)
  };
  return Tag;
};