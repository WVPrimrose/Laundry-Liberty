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
      orderNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncriment: true,
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
      {
        sequelize,
        timestamps: true,
        freezeTableName: false,
        underscored: false,
        modelName: 'orders',
      }  
);

module.exports = order;