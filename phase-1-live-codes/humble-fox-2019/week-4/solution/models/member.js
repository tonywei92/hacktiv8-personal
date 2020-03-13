'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class Member extends Model {
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }

  Member.init({
    nik: {
      type: DataTypes.STRING,
      validate: {
        isNumeric: {
          msg: "Harus angka"
        },
        notEmpty: {
          msg: "NIK harus diisi"
        }
      }
    },
    firstName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "First name harus diisi"
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Last name harus diisi"
        }
      }
    },
    address: DataTypes.STRING,
    phone: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Phone haru diisi"
        }
      }
    }
  }, { sequelize });

  Member.associate = function (models) {
    Member.Item = Member.hasMany(models.Item, { foreignKey: "rentedBy", sourceKey: "id" });
  };

  return Member;
};