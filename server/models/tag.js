module.exports = (sequelize, DataTypes) => {
    const Tag = sequelize.define('Tag', {
      name: DataTypes.STRING,
      color: DataTypes.STRING,
    });
  
    Tag.associate = function(models) {
      Tag.belongsToMany(models.Task, { through: 'TaskTags' });
    };
  
    return Tag;
  };
  