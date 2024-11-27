// * Console.js doit hériter de Product et représenter les consoles de jeu
import { Product } from './Product.js';

class Console extends Product {
    maker;
    frameRate;

    // * on doit pouvoir donner des valeurs à nos nouvelles propriétés
    constructor(name, priceHT, category, maker, frameRate) {
        super(name, priceHT, category);
        this.maker = maker;
        this.frameRate = frameRate;
    }

    // constructor(data) {
    //     super(data.name, data.priceHT, data.category);
    //     this.maker = data.maker;
    //     this.frameRate = data.frameRate;
    // }

    // * un accesseur / getter est une méthode qui retourne des données formattées
    // * un accesseur est une méthode préfixée avec le mot clé get
    // * un accesseur est utilisé pour lire des données (souvent des données privées)
    get manufacturer() {
        return this.maker.toUpperCase();
    }
}

const ps5 = new Console('ps5', 456, 'gaming', 'sony', 60);

console.log(ps5.manufacturer);

console.log(ps5);
// * on utilise l'accesseur priceHT pour lire la propriété privée
console.log(ps5.priceHT);
// * on tente de modifier la propriété privée priceHT mais on ne peut pas car on n'a pas de mécanisme en place pour le faire : on va faire un setter sur Product
ps5.priceHT = 5;

console.log(ps5);

// * Quand on veut de servir d'un accesseur, on s'en sert comme d'une propriété classique
console.log(ps5.manufacturer);
