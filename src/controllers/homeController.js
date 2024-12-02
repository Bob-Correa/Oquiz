import { Answer } from '../models/Answer.js';

const homeController = {
    //
    async homePage(req, res) {
        const answer_obj = {
            description: 'test',
            question_id: 1,
        };

        try {
            const answer = await Answer.create(answer_obj);

            console.log(answer);

            res.render('home');
        } catch (error) {
            // * - le message d'erreur est le suivant :
            // ? Validation error: Le mot de passe doit contenir au moins 8 caractères
            // avec split on coupe la string en se basant sur le : et split crée un tableau avec deux éléments : ['Validation error:', 'Le mot de passe doit contenir au moins 8 caractères']
            const errorMessageArray = error.message.split(':');

            const message = errorMessageArray[1];

            console.log(error.errors[0].message);
            //  ! temporaire: les détails après l'atelier PP
            res.render('home');
        }
    },
};

export { homeController };
