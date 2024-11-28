import { client } from '../database/client.js';
import { CoreModel } from './CoreModel.js';

class User extends CoreModel {
    static table = 'user';

    firstname;
    lastname;
    email;
    password;

    constructor(obj) {
        super(obj);
        this.firstname = obj.firstname;
        this.lastname = obj.lastname;
        this.email = obj.email;
        this.password = obj.password;
    }

    // * un accesseur / getter est une méthode qui retourne des données formattées
    // * un accesseur est une méthode qui ne prend jamais de paramètres préfixée avec le mot-clé get
    // * un accesseur est utilisé pour lire des données (souvent des données privées)
    get fullname() {
        return `${this.firstname} ${this.lastname}`;
    }

    get credentials() {
        return `EMAIL: ${this.email}, PASSWORD: MASQUÉ POUR DES RAISONS DE SÉCURITÉ`;
    }

    // static async findAll() {
    //     const query = `SELECT * FROM "${this.table}";`;

    //     const results = await client.query(query);

    //     // le nouveau tableau qui va recevoir les instances de user et qu'on retournera au controleur
    //     const userInstances = [];
    //     // la boucle permet d'instancier autant de user que l'on a d'objets dans result.rows
    //     for (const userObj of results.rows) {
    //         // on instancie un user à chaque tour de boucle
    //         // const level = new User(results.rows[i]);
    //         const user = new this(userObj);

    //         userInstances.push(user);
    //     }

    //     return userInstances;
    // }

    static async findOne(id) {
        const query = {
            text: 'SELECT * FROM "' + this.table + '" WHERE id = $1',
            values: [id],
        };

        const results = await client.query(query);
        // const results = await client.query(query, [id]);

        if (!results.rowCount) {
            return null;
        }

        // * Dans une méthode static, le mot-clé this représente la classe
        const user = new this(results.rows[0]);
        // const user = new User(results.rows[0]);

        return user;
    }

    // ids est tableau d'id
    static async findMany(ids) {
        //  la difficulté est de générer les placeholders dynamiquement en se basant sur le tableau ids
        const query = {
            text: 'SELECT * FROM "' + this.table + '" WHERE id IN ($1)',
            values: ids,
        };

        const results = await client.query(query);
        // const results = await client.query(query, [id]);

        if (!results.rowCount) {
            return null;
        }

        // * Dans une méthode static, le mot-clé this représente la classe
        const user = new this(results.rows[0]);
        // const user = new User(results.rows[0]);

        return user;
    }

    static async findByEmail(email) {
        const query = {
            text: 'SELECT * FROM "' + this.table + '" WHERE email = $1',
            values: [email],
        };

        const results = await client.query(query);
        // const results = await client.query(query, [id]);

        if (!results.rowCount) {
            return null;
        }

        // * Dans une méthode static, le mot-clé this représente la classe
        const user = new this(results.rows[0]);
        // const user = new User(results.rows[0]);

        return user;
    }

    static async create(dataObj) {
        // * les placeholders sont des éléments temporaires qui sont remplacées par les vraies valeurs au moment de l'exécution de la requête.
        // * les nombres correspondent à l'ordre dans lequel les éléments sont rangés dans le tableau values
        // * ça sert à faire une requête préparée qui nous protège des injections sql
        const query = {
            text: `
                INSERT INTO "${this.table}" (firstname, lastname, email, password)
                VALUES ($1, $2, $3, $4)
                RETURNING *`,
            values: [
                dataObj.firstname,
                dataObj.lastname,
                dataObj.email,
                dataObj.password,
            ],
        };

        const result = await client.query(query);

        if (!result.rowCount) {
            return null;
        }

        const user = new this(result.rows[0]);
        // const user = new User(result.rows[0]);

        return user;
    }

    async update() {
        // dans une méthode d'instance, on se sert du nom du constructeur pour trouver le nom de la table
        // this.constructor.name.toLowerCase();
        //  on peut aussi se servir de la variable ci dessous
        // console.log(this.constructor.table);

        const query = {
            text: `
                UPDATE "${this.constructor.name.toLowerCase()}" SET
                    firstname = $1,
                    lastname = $2,
                    email = $3,
                    password = $4,
                    updated_at = '${new Date().toISOString()}'
                WHERE id = $5
                RETURNING *;
            `,
            values: [
                this.firstname,
                this.lastname,
                this.email,
                this.password,
                this.id,
            ],
        };

        const result = await client.query(query);

        if (!result.rowCount) {
            return null;
        }

        return this;
    }

    // * attention aux clés étrangères quand on efface une donnée, postgresql ne nous laisse pas faire si l'id de user est référencé dans quiz
    async destroy() {
        const query = {
            text: `DELETE FROM "${this.constructor.table}" WHERE id = $1`,
            values: [this.id],
        };

        await client.query(query);

        return null;
    }
}

export { User };

// const user = new User({
//     firstname: 'superman',
//     lastname: 'kent',
// });

// console.log(user);
// console.log(user.fullname);
