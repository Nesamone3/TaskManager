module.exports = (sequelize, DataTypes) => {
    const ActivityType = sequelize.define('ActivityType', {
      name: DataTypes.STRING,
    });
  
    ActivityType.associate = function(models) {
      ActivityType.hasMany(models.Activity, { foreignKey: 'activityTypeId', as: 'activities' });
    };
  
    return ActivityType;
  };
  