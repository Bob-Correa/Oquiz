import { Tag } from '../models/index.js';

const tagController = {
    //
    async index(req, res) {
        //
        const tags = await Tag.findAll({
            include: 'quizzes',
        });

        res.render('tags', { tags });
    },
};

export { tagController };
