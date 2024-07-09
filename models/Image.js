// models/Image.js

const { DataTypes } = require('sequelize');
const sequelize = require('../lib/sequelize');

const Image = sequelize.define('Image', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  filename: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Image;
