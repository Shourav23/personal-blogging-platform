const { Post, User } = require('../models');

const getPosts = async (req, res) => {
  const posts = await Post.findAll({ include: [User] });
  res.json(posts);
};

const createPost = async (req, res) => {
  const { title, content } = req.body;
  const post = await Post.create({ title, content, userId: req.userId });
  res.json(post);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const post = await Post.findByPk(id);
  if (post.userId !== req.userId) return res.status(403).json({ message: 'Forbidden' });

  post.title = title;
  post.content = content;
  await post.save();
  res.json(post);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findByPk(id);
  if (post.userId !== req.userId) return res.status(403).json({ message: 'Forbidden' });

  await post.destroy();
  res.json({ message: 'Post deleted' });
};

module.exports = { getPosts, createPost, updatePost, deletePost };
