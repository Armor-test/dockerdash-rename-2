  import express from 'express';
  const router = express.Router();

  router.get('/api/v1/users', (req, res) => {
    res.json({ users: [] });
  });

  export default router;
