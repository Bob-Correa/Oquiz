import { Router } from 'express';
const router = Router();
import { levelRouter } from './levelRouter.js';

import { homeController } from '../controllers/homeController.js';

router.get('/', homeController.homePage);

router.use(levelRouter);

export { router };
