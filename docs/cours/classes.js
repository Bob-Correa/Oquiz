//  * les classes en javascript
class Product {

}

// * le mot clé new sert à créer un objet à partir d'une classe (ou d'une fonction), on parle d'instanciation
// * Instancier une classe c'est créer un objet à partir de cette classe
const prod = new Product();
// * La variable prod est une instance de la classe Product
// * Une instance est un objet issu d'une classe
// console.log(prod);

class Figurine {
    // * on définit les propriétés qui composent notre objet
    name;
    priceHT;
    priceTTC;
    category;

    // * Un constructeur est une méthode dite magique : c'est une méthode qui s'exécute toute seule au moment ou on instancie une classe
    // * En POO, une fonction dans une classe s'appelle une méthode
    // * Il n'y a qu'un seul constructeur par classe
    constructor(name, price, category) {
        if(!name) {
            // * le mot clé throw sert à lever une erreur et coupe l'exécution du code
            throw Error('Le name est obligatoire');
        }
        // * On doit assigner les données reçues aux propriétés de notre objet, grace au mot clé this
        // console.log('THIS', this);
        // * Dans un classe le mot clé this représente l'objet courant : celui sur lequel on est en train de créer / d'agir
        this.name = name;
        this.priceHT = price;
        this.category = category;
        this.priceTTC = this.calcPriceTTC();
    }

    // * Cette méthode calcule le prix TTC d'une figurine à partir du prix HT définit dans la classe
    calcPriceTTC() {
        return this.priceHT * 1.2;
    }
}

// const figObj = new Figurine();
// figObj.name = 'aerith';
// figObj.price = 153;
// * Attention quand ajoute des propriétés qui ne sont pas définies dans la classe
// figObj.category = 'Gentil';

// * Quand on passe des arguments dans une classe au moment ou on l'instancie, si on veut pouvoir faire quelque chose avec ces arguments, il faut ajouter un constructeur à la classe
const figObj = new Figurine('Aerith', 150, 'Gentil');
console.log(figObj);
console.log( figObj.calcPriceTTC() );

const figObj2 = new Figurine('Final', 457, 'Gentil');
console.log(figObj2);
console.log( figObj2.calcPriceTTC() );

try {

    const emptyFig = new Figurine();
    console.log(emptyFig);
} catch (error) {
    console.log(error.message);

}
