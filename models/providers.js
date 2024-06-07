const { Model, DataTypes } = require('sequelize');

const sequlize =require('../config/connections');

class orders extends Model {}

orders.init(
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
    },
      {
        sequelize,
        timestamps: false,
        freezeTableName: false,
        underscored: false,
        modelName: 'providers',
      }  
);

module.exports = orders;