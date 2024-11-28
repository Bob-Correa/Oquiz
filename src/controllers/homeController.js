import { levelDataMapper } from '../datamappers/level.js';
import { Level } from '../models/Level.js';
import { Quiz } from '../models/Quiz.js';
import { User } from '../models/User.js';

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

        // level.name = 'je teste la mise à jour avec active record';

        // await level.update();

        // console.log(level);

        // const newLevel = await Level.create('POO test constructor');

        // console.log(newLevel.id);
        // await newLevel.destroy();

        // const user = await User.findByEmail('philippe@oclock.io');
        // console.log(user);

        // const userObj = {
        //     firstname: 'lorenzo',
        //     lastname: 'olcokc',
        //     email: 'email',
        //     password: 'toto',
        // };

        // const newUser = await User.create(userObj);
        // await newUser.destroy();
        const quiz = await Quiz.findOne(1);
        await quiz.destroy();

        res.render('home');
    },
};

export { homeController };
