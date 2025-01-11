'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bootcamp extends Model {

    static associate(models) {
      this.belongsToMany(models.User, {
        through: models.UserBootcamp,
      });
    }

  }
  Bootcamp.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cue: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 5,
        max: 10
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Bootcamp',
    paranoid: true
  });
  return Bootcamp;
};