'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserBootcamp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const { User, Bootcamp } = models;
      this.belongsTo(User);
      this.belongsTo(Bootcamp);
    }
  }
  UserBootcamp.init({
    UserId: DataTypes.INTEGER,
    BootcampId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserBootcamp',
  });
  return UserBootcamp;
};