import { client } from '../database/client.js';
import { CoreModel } from './CoreModel.js';

class Level extends CoreModel {
    static table = 'level';
    name;

    constructor(obj) {
        if (!obj.name) {
            throw new Error('la propriété name est obligatoire');
        }
        // appeler super pour initialiser le constucteur du parent est obligatoire avant d'utiliser le mot-clé this
        // après avoir appeler super(), le mot clé this est disponible
        super(obj);

        this.name = obj.name;
    }

    // * le mot-clé static va permettre de court-circuiter le controller et de se servir de cette méthode.
    // * on a une méthode de classe
    // * le mot clé this ne représente plus un objet, mais la classe
    // static async findAll() {
    //     const query = `SELECT * FROM ${this.table};`;

    //     const results = await client.query(query);

    //     // le nouveau tableau qui va recevoir les instances de level et qu'on retournera au controleur
    //     const levelInstances = [];
    //     // la boucle permet d'instancier autant de level que l'on a d'objets dans result.rows
    //     for (let i = 0; i < results.rows.length; i++) {
    //         // on instancie un level à chaque tour de boucle
    //         // const level = new Level(results.rows[i]);
    //         const level = new this(results.rows[i]);

    //         levelInstances.push(level);
    //     }

    //     return levelInstances;
    // }

    //
    static async findOne(id) {
        const query = {
            text: 'SELECT * FROM ' + this.table + ' WHERE id = $1',
            values: [id],
        };

        const results = await client.query(query);
        // const results = await client.query(query, [id]);

        if (!results.rowCount) {
            return null;
        }

        // * Dans une méthode static, le mot-clé this représente la classe
        const level = new this(results.rows[0]);
        // const level = new Level(results.rows[0]);

        return level;
    }

    // * Quand on veut mettre à jour un level : on va assumer qu'on a trouvé le level avant : on a déjà une instance sur laquelle on travaille
    //  * le mot-clé this représente l'instance de la classe : l'objet level lui même
    async update() {
        // dans une méthode d'instance, on se sert du nom du constructeur pour trouver le nom de la table
        // this.constructor.name.toLowerCase();
        //  on peut aussi se servir de la variable ci dessous
        // console.log(this.constructor.table);

        const query = {
            text: `
                UPDATE ${this.constructor.name.toLowerCase()} SET
                name = $1, updated_at = '${new Date().toISOString()}'
                WHERE id = $2 RETURNING *
            `,
            values: [this.name, this.id],
        };

        const result = await client.query(query);

        if (!result.rowCount) {
            return null;
        }

        return this;
    }
    //
    static async create(name) {
        const query = {
            text: `INSERT INTO ${this.table} (name) VALUES ($1) RETURNING *`,
            values: [name],
        };

        const result = await client.query(query);

        if (!result.rowCount) {
            return null;
        }

        const level = new this(result.rows[0]);
        // const level = new Level(result.rows[0]);

        return level;
    }

    // * attention aux clés étrangères quand on efface une donnée, postgresql ne nous laisse pas faire si l'id de level est référencé par question
    async destroy() {
        const query = {
            text: `DELETE FROM ${this.constructor.table} WHERE id = $1`,
            values: [this.id],
        };

        await client.query(query);

        return null;
    }
    //
}

export { Level };

// * dans peu de temps ces données viendront de pg
// const obj = {
//     id: 1,
//     name: 'Facile',
//     created_at: new Date().toISOString(),
//     updated_at: undefined,
// };

// const level = new Level(obj);
// // * la variable level est une instance de la classe Level : un objet créé avec la classe level
// console.log(level instanceof Level); // true
// console.log(level instanceof CoreModel); // true
// console.log(level);
// console.log(level.id);
