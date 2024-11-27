import { client } from '../database/client.js';
import { Level } from '../models/Level.js';

const levelDataMapper = {
    //
    async findAll() {
        const query = 'SELECT * FROM level;';

        const results = await client.query(query);

        // le nouveau tableau qui va recevoir les instances de level et qu'on retournera au controleur
        const levelInstances = [];
        // la boucle permet d'instancier autant de level que l'on a d'objets dans result.rows
        for (let i = 0; i < results.rows.length; i++) {
            // on instancie un level à chaque tour de boucle
            const level = new Level(results.rows[i]);

            levelInstances.push(level);
        }

        return levelInstances;
    },

    async findOne(id) {
        const query = {
            text: 'SELECT * FROM level WHERE id = $1',
            values: [id],
        };

        const results = await client.query(query);
        // const results = await client.query(query, [id]);

        if (!results.rowCount) {
            return null;
        }

        const level = new Level(results.rows[0]);

        return level;
    },

    // * Quand on veut mettre à jour un level : on va assumer qu'on a trouvé le level avant : on a déjà une instance sur laquelle on travaille
    async update(data) {
        const query = {
            text: `UPDATE level SET name = $1, updated_at = '${new Date().toISOString()}' WHERE id = $2 RETURNING *`,
            values: [data.name, data.id],
        };

        const result = await client.query(query);

        if (!result.rowCount) {
            return null;
        }

        const level = new Level(result.rows[0]);

        return level;
    },

    // *
    async create(name) {
        const query = {
            text: 'INSERT INTO level (name) VALUES ($1) RETURNING *',
            values: [name],
        };

        const result = await client.query(query);

        if (!result.rowCount) {
            return null;
        }

        const level = new Level(result.rows[0]);

        return level;
    },

    // * attention au clés étrangères quand on efface une donnée, postgresql ne nous laisse pas faire si l'id de level est référencé par question
    async destroy(id) {
        const query = {
            text: 'DELETE FROM level WHERE id = $1',
            values: [id],
        };

        await client.query(query);

        return null;
    },
};

export { levelDataMapper };
