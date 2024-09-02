import { Router } from 'express';
import Comment from '../models/Comment';

const router: Router = Router();

// Create a new comment
router.post('/', async (req, res) => {
  try {
    const { content, post, author } = req.body;
    const comment = new Comment({ content, post, author });
    await comment.save();
    res.status(201).json(comment);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
});

// Get all comments for a specific post
router.get('/post/:postId', async (req, res) => {
  try {
    const { postId } = req.params;
    const comments = await Comment.find({ post: postId }).populate('author');
    res.status(200).json(comments);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
});

export default router;
