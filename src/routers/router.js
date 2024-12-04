import { Router } from 'express';
const router = Router();
import { levelRouter } from './levelRouter.js';

import { homeController } from '../controllers/homeController.js';
import { quizController } from '../controllers/quizController.js';

router.get('/', homeController.homePage);

router.get('/quiz/:id(\\d+)', quizController.show);

router.use(levelRouter);

export { router };
