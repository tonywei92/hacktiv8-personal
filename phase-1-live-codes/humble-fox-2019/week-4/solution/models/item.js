'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Item extends Model {

  }

  Item.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Nama harus diisi'
        }
      }
    },
    condition: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Kondisi harus dipilih'
        }
      }
    },
    pricePerDay: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: "Price harus diisi"
        },
        min: {
          args: [10000],
          msg: "Biaya sewa minimal 10000"
        }
      }
    },
    rentedBy: DataTypes.INTEGER,
    rentedOn: DataTypes.DATE
  }, {
      sequelize
    });

  Item.addHook('beforeDestroy', (item) => {
    if (item.rentedBy) {
      throw new Error('Tidak dapat menghapus item, masih di sewa')
    }
  })

  Item.addHook('afterUpdate', (item) => {
    if (item._previousDataValues.rentedBy) {
      sequelize.models.Member.findByPk(item._previousDataValues.rentedBy)
        .then(member => {
          const day = Math.ceil((new Date() - item._previousDataValues.rentedOn) / 86400000)
          sequelize.models.Log.create({
            itemId: item.id,
            description: `Barang dikembalikan oleh ${member.fullName} dalam jangka ${day} hari, total ${day * item.pricePerDay} dalam kondisi ${item.condition}`
          })
        })

    }
    else {
      item.getMember().then(member => {
        sequelize.models.Log.create({
          itemId: item.id,
          description: `Barang dipinjam oleh ${member.fullName} dalam kondisi ${item.condition}`
        })

      })

    }

  })

  Item.associate = function (models) {
    Item.Member = Item.belongsTo(models.Member, { foreignKey: 'rentedBy', targetKey: 'id' });
    Item.Log = Item.hasMany(models.Log, { foreignKey: 'itemId', sourceKey: 'id' })
  };

  return Item;
};