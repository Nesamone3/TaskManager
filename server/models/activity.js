module.exports = (sequelize, DataTypes) => {
    const Activity = sequelize.define('Activity', {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      url: DataTypes.STRING,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      // Status and Tags will be associations defined later
      // ActivityType will be an association defined later
    });
  
    Activity.associate = function(models) {
      Activity.hasMany(models.Task, { foreignKey: 'activityId', as: 'tasks' });
      Activity.belongsTo(models.ActivityType, { foreignKey: 'activityTypeId', as: 'type' });
      Activity.belongsToMany(models.Tag, { through: 'ActivityTags' });
    };
  
    return Activity;
  };
  