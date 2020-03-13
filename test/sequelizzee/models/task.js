'use strict';
module.exports = (sequelize, DataTypes) => {
  const {models} = sequelize;
  const Task = sequelize.define('Task', {
    name: DataTypes.STRING,
    due_date: DataTypes.DATE,
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: models.User,
        key: 'id'
      }
    }
  }, {});
  Task.associate = function(models) {
    Task.belongsTo(models.User, {constraints: true, foreignKeyConstraint:true, allowNull: false, onDelete: 'CASCADE', })
  };
  return Task;
};