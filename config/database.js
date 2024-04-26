const Sequelize = require('sequelize');

// Created a new Sequelize instance with hardcoded logins fix later....
const sequelize = new Sequelize('postgres', 'postgres', 'postgress', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'
});

module.exports = sequelize;
