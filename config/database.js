const Sequelize = require('sequelize');

// Create a new Sequelize instance with your database credentials
const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres' // Or 'mysql', 'sqlite', 'mssql' depending on your DB
});

module.exports = sequelize;
