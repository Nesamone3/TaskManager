const Sequelize = require('sequelize');
const db = require('../config/database'); // You need to create this database config file

const Task = db.define('task', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: true // Depending on whether the content can be null
  },
  startDate: {
    type: Sequelize.DATE,
    allowNull: true
  },
  endDate: {
    type: Sequelize.DATE,
    allowNull: true
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false
  },
  // Assuming status is a simple string for now. If it's a relation to another table, you would use an association instead.
  activityId: {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'activities', // This is a reference to another model
      key: 'id', // This is the column name of the referenced model
    }
  },
  // ... include other fields like tags
});

module.exports = Task;
