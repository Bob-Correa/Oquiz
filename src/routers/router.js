import { Router } from 'express';
const router = Router();
import { levelRouter } from './levelRouter.js';

import { homeController } from '../controllers/homeController.js';
import { quizController } from '../controllers/quizController.js';
import { tagController } from '../controllers/tagController.js';
import { registerController } from '../controllers/registerController.js';
import { sessionController } from '../controllers/sessionController.js';
import { userController } from '../controllers/userController.js';
import { isAuth } from '../middlewares/isAuth.js';

router.get('/', homeController.homePage);

router.get('/quiz/:id(\\d+)', quizController.show);

router.get('/tags', tagController.index);

// *  auth : les 4 routes suivantes devraient être inaccessible si on est connecté
// todo : un middleware qui bloque l'accès aux 4 routes suivantes
router.get('/register', registerController.showRegisterForm);
router.post('/register', registerController.register);
//
router.get('/login', sessionController.showLoginForm);
router.post('/login', sessionController.login);

// route auth
router.get('/profile', isAuth, userController.show);

router.use(levelRouter);

export { router };
