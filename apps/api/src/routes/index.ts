import { testRouter } from '@/routes/test/route.js';
import { Router } from 'express';

const router = Router();

router.use('/test', testRouter);

export default router;
