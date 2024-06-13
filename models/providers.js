const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); 

class Provider extends Model {}

Provider.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Add other fields here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'provider',
  }
);

module.exports = Provider;
