'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.Post, { foreignKey: 'postId', as: 'post' });
    Comment.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };
  return Comment;
};
