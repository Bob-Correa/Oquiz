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
import { catchErrors } from '../middlewares/errorHandlers/handlers.js';
import { redirectIfAuthenticated } from '../middlewares/redirectIfAuthenticated.js';

router.get('/', catchErrors(homeController.homePage));

router.get('/quiz/:id(\\d+)', catchErrors(quizController.show));

router.get('/tags', catchErrors(tagController.index));

// *  auth : les 4 routes suivantes devraient être inaccessible si on est connecté
// ? DONE : un middleware qui bloque l'accès aux 4 routes suivantes
router.get(
    '/register',
    redirectIfAuthenticated,
    catchErrors(registerController.showRegisterForm)
);
router.post(
    '/register',
    redirectIfAuthenticated,
    catchErrors(registerController.register)
);
//
router.get(
    '/login',
    redirectIfAuthenticated,
    catchErrors(sessionController.showLoginForm)
);
router.post(
    '/login',
    redirectIfAuthenticated,
    catchErrors(sessionController.login)
);

// route auth
router.get('/profile', isAuth, catchErrors(userController.show));
router.get('/logout', isAuth, catchErrors(sessionController.destroy));

router.use(levelRouter);

export { router };
