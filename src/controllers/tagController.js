import { Tag } from '../models/index.js';

const tagController = {
    //
    async index(req, res) {
        //
        try {
            const tags = await Tag.findAll({
                include: 'quizzes',
            });

            res.render('tags', { tags });
        } catch (error) {
            console.log(error.message);

            res.render('500');
        }
    },
};

export { tagController };
