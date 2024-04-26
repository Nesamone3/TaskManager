module.exports = (sequelize, DataTypes) => {
    const Status = sequelize.define('Status', {
      title: DataTypes.STRING,
      style: DataTypes.STRING,
    });
  
    Status.associate = function(models) {
      Status.hasMany(models.Task, { foreignKey: 'statusId', as: 'tasks' });
    };
  
    return Status;
  };
  