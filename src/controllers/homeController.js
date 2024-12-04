import { Quiz } from '../models/index.js';

const homeController = {
    //
    async homePage(req, res) {
        try {
            const quizzes = await Quiz.findAll({
                include: ['author', 'tags'],
                order: [['title', 'ASC']],
            });

            res.render('home', { quizzes });
        } catch (error) {
            console.log(error.message);

            // * - le message d'erreur est le suivant :
            // ? Validation error: Le mot de passe doit contenir au moins 8 caractères
            // avec split on coupe la string en se basant sur le : et split crée un tableau avec deux éléments : ['Validation error:', 'Le mot de passe doit contenir au moins 8 caractères']
            // const errorMessageArray = error.message.split(':');

            // const message = errorMessageArray[1];

            // console.log(error.errors[0].message);
            // ! temporaire: les détails après l'atelier PP
            let err = null;

            if (process.env.NODE_ENV === 'development') {
                err = error.message;
            }

            res.status(500).render('500', { error: err });
        }
    },
};

export { homeController };
