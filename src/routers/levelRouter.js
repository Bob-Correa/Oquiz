import { Router } from 'express';
const levelRouter = Router();

import { levelController } from '../controllers/levelController.js';
import { catchErrors } from '../middlewares/errorHandlers/handlers.js';
// * les 7 noms de méthodes des controlleurs CRUD correspondent à des actions
// ? index => affiche une liste des ressources
// ? show => afficher une ressource
// ? create => affiche un formulaire qui permet de créer une ressource
// ? store => permet de sauvegarder une ressource
// ? edit => affiche un formulaire qui permet de mettre à jour une ressource
// ? update => permet de sauvegarder la mise à jour d'une ressource
// ? destroy => qui permet d'effacer une ressource

levelRouter.get('/levels', catchErrors(levelController.index));
// * route pour créer un niveau
levelRouter.post('/levels/create', catchErrors(levelController.store));
// * rappel : le (\\d+) est une expression régulière fournie par express et qui va s'assurer que le paramètre :id est toutjours un nombre entier positif
levelRouter.get('/levels/:id(\\d+)', catchErrors(levelController.show));
// route pour mettre à jour le level
levelRouter.post('/levels/:id(\\d+)', catchErrors(levelController.update));
//  route pour effacer un level
levelRouter.post(
    '/levels/:id(\\d+)/delete',
    catchErrors(levelController.destroy)
);

export { levelRouter };
