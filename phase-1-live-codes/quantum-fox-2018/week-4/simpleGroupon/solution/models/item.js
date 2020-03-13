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
    discount: DataTypes.INTEGER,
    CompanyId: DataTypes.INTEGER
  }, {});
  Item.associate = function(models) {
    // associations can be defined here
    Item.belongsTo(models.Company)
  };

  Item.prototype.price_after_discount = function () {
    let new_price = this.original_price - (this.original_price * this.discount / 100)
    return new_price
  };

  return Item;
};
