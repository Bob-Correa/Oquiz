import { Router } from 'express';
const router = Router();
import { levelRouter } from './levelRouter.js';

import { homeController } from '../controllers/homeController.js';
import { quizController } from '../controllers/quizController.js';
import { tagController } from '../controllers/tagController.js';
import { registerController } from '../controllers/registerController.js';
import { sessionController } from '../controllers/sessionController.js';

router.get('/', homeController.homePage);

router.get('/quiz/:id(\\d+)', quizController.show);

router.get('/tags', tagController.index);

//  auth
router.get('/register', registerController.showRegisterForm);
router.post('/register', registerController.register);
//
router.get('/login', sessionController.showLoginForm);
router.post('/login', sessionController.login);

router.use(levelRouter);

export { router };
