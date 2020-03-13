'use strict';
module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    original_price: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    item_type: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args: [['food', 'travel']]
        },
        isLowercase: {
          args: true,
          msg: "isi huruf kecil"
        }
      }

    },
    idr_discount: DataTypes.INTEGER,
    CompanyId: DataTypes.INTEGER
  }, {});
  Item.associate = function(models) {
    // associations can be defined here
    Item.belongsTo(models.Company)
  };

  return Item;
};
