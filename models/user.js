const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: 6
      }
    },
  },
  {
    hooks: {
        async beforeCreate(userData) {
            userData.password = await bcrypt.hash(userData.password, 10)
            return userData
        },
        async beforeUpdate(userData) {
            userData.password = await bcrypt.hash(userData.password, 10)
            return userData
        },
    },
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'User',
  }
);

module.exports = User;