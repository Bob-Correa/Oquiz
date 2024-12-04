import { Quiz } from '../models/index.js';

const quizController = {
    //
    async show(req, res, next) {
        //
        const { id } = req.params;

        try {
            const quiz = await Quiz.findByPk(id, {
                include: [
                    { association: 'author' },
                    { association: 'tags' },
                    {
                        association: 'questions',
                        include: ['proposals', 'level'],
                    },
                ],
            });

            if (!quiz) {
                // va appeler le midlleware suivant : 404
                return next();
            }

            res.render('quiz', { quiz });
        } catch (error) {
            console.log(error);

            res.render('500');
        }
    },
};

export { quizController };
