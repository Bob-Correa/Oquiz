import { client } from '../database/client.js';

class CoreModel {
    //
    static table;
    #id;
    created_at;
    updated_at;

    constructor(obj) {
        this.id = obj.id;
        this.created_at = obj.created_at;
        this.updated_at = obj.updated_at;
    }

    // cet accesseur permet de lire la propriété privée #id en dehors de cette classe
    get id() {
        return this.#id;
    }

    // ce mutateur permet de modifier la propriété privée #id en dehors de cette classe
    set id(newId) {
        this.#id = newId;
    }
    //
    static async findAll() {
        const query = `SELECT * FROM "${this.table}";`;

        const results = await client.query(query);

        // le nouveau tableau qui va recevoir les instances de user et qu'on retournera au controleur
        const dataInstances = [];
        // la boucle permet d'instancier autant de user que l'on a d'objets dans result.rows
        for (const obj of results.rows) {
            // on instancie un user à chaque tour de boucle
            // const level = new User(results.rows[i]);
            const modelInstance = new this(obj);

            dataInstances.push(modelInstance);
        }

        return dataInstances;
    }

    static async findOne(id) {
        const query = {
            text: 'SELECT * FROM "' + this.table + '" WHERE id = $1',
            values: [id],
        };

        const results = await client.query(query);

        if (!results.rowCount) {
            return null;
        }

        // * Dans une méthode static, le mot-clé this représente la classe
        const instance = new this(results.rows[0]);
        // const instance = new Level(results.rows[0]);

        return instance;
    }

    async destroy() {
        const query = {
            text: `DELETE FROM "${this.constructor.table}" WHERE id = $1`,
            values: [this.id],
        };

        await client.query(query);

        return null;
    }
}

export { CoreModel };
