"use strict";
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  const Op = sequelize.Sequelize.Op;
  class Author extends Model {
    get fullDescription() {
      return `${this.name}, tinggal di ${this.address}, umur: ${this.age}`;
    }

    static AuthorOlderThan(age) {
      return this.findAll({
        where: {
          age: {
            [Op.gt]: age
          }
        }
      }).then(authors => {
        for (let i = 0; i < authors.length; i++) {
          authors[i].setDataValue(
            "full_description",
            authors[i].fullDescription
          );
        }
        return authors;
      });
    }
  }

  Author.init(
    {
      name: DataTypes.STRING,
      address: {
        type: DataTypes.STRING,
        unique: {
          args: [true],
          msg: "address harus unique"
        }
      },
      age: {
        type: DataTypes.INTEGER,
        validate: {
          minimal5(value) {
            if (value < 5) {
              throw new Error("minimal umur 5, ini custom");
            }
          }
        }
      },
      email: {
        type: DataTypes.STRING
      }
    },
    {
      validate: {
        danangPastiUmurnyaLebihDari20() {
          if (this.name === "danang" && this.age <= 20) {
            throw new Error("Danang tidak mungkin semuda itu");
          }
        },
        edisonPastiUmurnyaLebihDari20() {
          if (this.name === "edison" && this.age <= 25) {
            throw new Error("Edison tidak mungkin semuda itu");
          }
        },
        uniqueEmail() {
          console.log(this)
          if (this.email) {
            return Author.findOne({
              where: {
                [Op.and]: {
                  email: this.email,
                  id: {
                    [Op.not]: this.id
                  }
                }
              }
            }).then(author => {
              if (author) {
                throw new Error('email sudah ada')
              }
            })
          }

        }
      },
      sequelize,
      modelName: "Author",
      hooks: {
        beforeSave: (instance, options) => {

        }
      }
    }
  );
  Author.associate = function (models) {
    Author.hasMany(models.Book);
  };
  return Author;
};
