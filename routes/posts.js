import { Router } from 'express';

import controller from '../controllers/posts.js'
import authorize from '../middlewares/authorize.js';

const router = Router();

router.get('/', authorize, controller.postList)

export default router;
