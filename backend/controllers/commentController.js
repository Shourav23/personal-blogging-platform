const { Comment } = require('../models');

const getComments = async (req, res) => {
  const { postId } = req.params;
  const comments = await Comment.findAll({ where: { postId } });
  res.json(comments);
};

const createComment = async (req, res) => {
  const { postId } = req.params;
  const { content } = req.body;
  const comment = await Comment.create({ content, userId: req.userId, postId });
  res.json(comment);
};

const updateComment = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  const comment = await Comment.findByPk(id);
  if (comment.userId !== req.userId) return res.status(403).json({ message: 'Forbidden' });

  comment.content = content;
  await comment.save();
  res.json(comment);
};

const deleteComment = async (req, res) => {
  const { id } = req.params;
  const comment = await Comment.findByPk(id);
  if (comment.userId !== req.userId) return res.status(403).json({ message: 'Forbidden' });

  await comment.destroy();
  res.json({ message: 'Comment deleted' });
};

module.exports = { getComments, createComment, updateComment, deleteComment };
