const express = require('express');
const { getComments, createComment, updateComment, deleteComment } = require('../controllers/commentController');
const { authenticate } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/:postId', getComments);
router.post('/:postId', authenticate, createComment);
router.put('/:id', authenticate, updateComment);
router.delete('/:id', authenticate, deleteComment);

module.exports = router;
