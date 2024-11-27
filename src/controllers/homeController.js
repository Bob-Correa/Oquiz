import { levelDataMapper } from '../datamappers/level.js';

const homeController = {
    async homePage(req, res, next) {
        const level = await levelDataMapper.findOne(1);

        const thing = await levelDataMapper.destroy(level.id);

        console.log(thing);

        if (!level) {
            // le next provoquera le middleware 404
            return next();
        }

        res.render('home');
    },
};

export { homeController };
