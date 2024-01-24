import { Router } from 'express';

const router = Router();

router.get('/invoice', (req, res) => {
  res.send('route invoice!');
});

export default router;