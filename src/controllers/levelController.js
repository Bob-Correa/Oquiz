import { Level } from '../models/Level.js';

const levelController = {
    async index(req, res) {
        // * la méthode findAll retourne tous les niveaux avec tous leurs attributs par défaut
        // const levels = await Level.findAll();

        // * si on souhaite filtrer, c'est à dire ne requêter que les attributs name : il faut passer un objet d'options pour préciser les attributs qu'on veut récupérer
        // const levels = await Level.findAll({
        //     attributes: ['id', 'name'],
        // });

        // * on exclue certains attributs de la requête
        const levels = await Level.findAll({
            attributes: {
                exclude: ['created_at', 'updated_at'],
            },
        });

        res.render('levels', { levels });
    },

    async show(req, res, next) {
        //
        const { id } = req.params;

        // find by primary key
        // const level = await Level.findByPk(id);

        // find one
        const level = await Level.findOne({
            where: { id: id },
        });

        if (!level) {
            return next();
        }

        res.render('level', { level });
    },

    async store(req, res) {
        //
        const { name } = req.body;

        await Level.create({ name: name });

        res.redirect('/levels');
    },

    async update(req, res, next) {
        const { id } = req.params;
        const { name } = req.body;

        // * 1ère méthode pour mise à jour : méthod static de la classe Level (héritée de Model)
        // * la méthode static update prend deux objets en arguments
        //  * le premier objet est celui qui contient les attributs à mettre à jour
        //  * le 2ème objet est celui qui contient wlause where pour ne mettre à jour qu'un élément
        // await Level.update(
        //     { name: name },
        //     {
        //         where: {
        //             id: id,
        //         },
        //     }
        // );

        // * on récupère le niveau à mettre à jour ( commun au deux façons de faire suivante )

        const level = await Level.findByPk(id);
        if (!level) {
            return next();
        }
        // on change l'attibute explicitement
        // level.name = name;
        // on sauvegarde le modèle
        // await level.save();
        // avec l'instance du modèle on peut aussi appeler une méthode update
        // cette méhtode ne prend qu'un objet : celui qui contient les attributs à mettre à jour
        await level.update({ name: name });

        res.redirect('/levels');
    },

    async destroy(req, res) {
        const { id } = req.params;

        await Level.destroy({
            where: { id: id },
        });

        res.redirect('/levels');
    },
};

export { levelController };
