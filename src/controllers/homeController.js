import { Quiz } from '../models/index.js';

const homeController = {
    //
    async homePage(req, res) {
        const quizzes = await Quiz.findAll({
            include: ['author', 'tags'],
            order: [['title', 'ASC']],
        });

        res.render('home', { quizzes });
    },
};

export { homeController };
