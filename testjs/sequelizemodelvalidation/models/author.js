"use strict";

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Author extends Model {
    fullDescription() {
      return `${this.name}, tinggal di ${this.address}`;
    }

    static getByGender(gender = "male") {
      return Author.findAll({
        where: {
          gender: gender
        }
      })
      .then(authors => {
        for(let i = 0; i<authors.length;i++){
          authors[i].setDataValue("full_description", authors[i].fullDescription())
        }
        return authors
      })
    }
  }

  Author.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      age: {
        type: DataTypes.INTEGER,
        validate: { max: { args: [150], msg: "Ngawur" } }
      },
      gender: {
        type: DataTypes.STRING,
        validate: {
          validInput(value) {
            if (!(value === "female" || value === "male")) {
              throw new Error("input tidak valid, hanya boleh male dan female");
            }
          }
        }
      }
    },
    {
      validate: {
        alamatTidakBolehLebihDari100Huruf() {
          if (this.name === "Audrick" && this.address.length > 100) {
            throw new Error("gagal, alamat kepanjangan");
          }
        },
        namanyagabolehaudrick() {}
      },
      sequelize,
      modelName: "Author"
    }
  );

  Author.associate = function(models) {
    // associations can be defined here
  };

  return Author;
};
