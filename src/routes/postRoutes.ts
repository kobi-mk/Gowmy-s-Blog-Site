import { Router } from 'express';
import Post from '../models/Post';

const router: Router = Router();

// Create a new post
router.post('/', async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const newPost = new Post({ title, content, author });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
});

// Get all posts
router.get('/', async (req, res) => {
    try {
      const posts = await Post.find(); // Fetch all posts from the database
      res.status(200).json(posts);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'An unknown error occurred' });
      }
    }
  });

export default router;
