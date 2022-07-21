'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    static associate({ User }) {
      Character.belongsTo(User, {
        foreignKey: "user_id",
        as: "user"
      })
    }
  }
  Character.init({
    character_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    race: {
      type: DataTypes.STRING,
      allowNull: false
    },
    class: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Character',
    tableName: 'characters',
    timestamps: false
  });
  return Character;
};