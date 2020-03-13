'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    menu_type: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args: [['food', 'drink']],
          msg: "Isi menu type dengan food / drink"
        },
        isAllowed: function(value, callback) {
          Menu.findAll({
            where:{
              menu_type: this.menu_type,
              RestaurantId: this.RestaurantId
            }
          }).then(function(menu) {
            if(menu.length >=5) {
              callback('Varian Food sudah maksimal !')
            } else {
              callback()
            }
          })
        }
      }
    },
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    RestaurantId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: (menu, options) => {
        if(menu.price == 0) {
          menu.price = 10000;
        }
      },
      beforeUpdate: (menu, options) => {
        if(menu.price == 0) {
          menu.price = 10000;
        }
      }
    }
  });
  Menu.associate = function(models) {
    // associations can be defined here
    Menu.belongsTo(models.Restaurant)
  };
  return Menu;
};
