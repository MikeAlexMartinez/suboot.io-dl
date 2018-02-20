/*jshint camelcase: false */
'use strict';

const Sequelize = require('sequelize');

const UpdateHeaders = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  time_of_update: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: new Date(),
  },
  model: {
    type: Sequelize.STRING(25),
    allowNull: false,
  },
  key_updated: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  occurences: {
    type: Sequelize.SMALLINT,
    allowNull: false,
    validate: {
      min: 1
    }
  }
};

module.exports = UpdateHeaders;
