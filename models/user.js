const { Model, DataTypes } = require('sequelize');

const sequlize =require('../config/connections');

class users extends Model {}

users.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncriment: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
      {
        sequelize,
        timestamps: false,
        freezeTableName: false,
        underscored: false,
        modelName: 'users',
      }  
);

module.exports = users;