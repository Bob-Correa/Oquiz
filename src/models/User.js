import { CoreModel } from './CoreModel.js';

class User extends CoreModel {
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
}

export { User };

const user = new User({
    firstname: 'superman',
    lastname: 'kent',
});

console.log(user);
console.log(user.fullname);
