module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('Task', {
      name: DataTypes.STRING,
      content: DataTypes.TEXT,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      // Tags and Status will be associations defined later
    });
  
    Task.associate = function(models) {
      Task.belongsTo(models.Activity, { foreignKey: 'activityId', as: 'activity' });
      Task.belongsToMany(models.Tag, { through: 'TaskTags' });
      Task.belongsTo(models.Status, { foreignKey: 'statusId', as: 'status' });
    };
  
    return Task;
  };
  