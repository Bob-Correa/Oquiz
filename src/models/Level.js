import { CoreModel } from './CoreModel.js';

class Level extends CoreModel {
    //
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
    //
}

export { Level };

// * dans peu de temps ces données viendront de pg
const obj = {
    id: 1,
    name: 'Facile',
    created_at: new Date().toISOString(),
    updated_at: undefined,
};

const level = new Level(obj);
// * la variable level est une instance de la classe Level : un objet créé avec la classe level
console.log(level instanceof Level); // true
console.log(level instanceof CoreModel); // true
console.log(level);
console.log(level.id);
