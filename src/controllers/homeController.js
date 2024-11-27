import { levelDataMapper } from '../datamappers/level.js';
import { Level } from '../models/Level.js';

const homeController = {
    async homePage(req, res, next) {
        // const level = await levelDataMapper.findOne(1);

        // const newLevel = await levelDataMapper.create('nouveau level');

        // const thing = await levelDataMapper.destroy(newLevel);

        // if (!level) {
        //     // le next provoquera le middleware 404
        //     return next();
        // }

        // const levels = await Level.findAll();

        // console.log(levels);

        // const level = await Level.findOne(1);

        // console.log(level);

        // level.name = 'je teste la mise à jour avec active record';

        // await level.update();

        // console.log(level);

        const newLevel = await Level.create('POO');

        console.log(newLevel.id);
        await newLevel.destroy();

        res.render('home');
    },
};

export { homeController };
