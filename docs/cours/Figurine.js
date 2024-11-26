import { Product } from "./Product.js";
//  * les classes en javascript
// * Pour nommer une classe, on utilise le KebabCase : la première lettre de chaque mot qui forme le nom de cette classe est en majuscule
// * le mot clé new sert à créer un objet à partir d'une classe (ou d'une fonction), on parle d'instanciation
// * Instancier une classe c'est créer un objet à partir de cette classe
// const prod = new Product();
// * La variable prod est une instance de la classe Product
// * Une instance est un objet issu d'une classe
// console.log(prod);
// * On fait un fichier pour chaque classe
// * La classe Figurine hérite des propriétés et méthodes de Product avec le mot clé extends
class Figurine extends Product {
    // * la propriété size est propre à figurine, donc on la définit dans cette classe
    size;
    // * Comment donner une valeur à cette propriété size ?
    constructor(name, priceHT, category, size) {
        // * super() appelle le constructeur de la classe parente
        // * Dans une classe enfant, quand on a un constructeur qui se sert du mot clé this, appeler super() est obligatoire
        super(name, priceHT, category);
        // * après l'appel à super(), on a accès au mot clé this
        this.size = size;
    }
}


// const figObj = new Figurine();
// figObj.name = 'aerith';
// figObj.price = 153;
// * Attention quand ajoute des propriétés qui ne sont pas définies dans la classe
// figObj.category = 'Gentil';

// * Quand on passe des arguments dans une classe au moment ou on l'instancie, si on veut pouvoir faire quelque chose avec ces arguments, il faut ajouter un constructeur à la classe
const figObj = new Figurine('Aerith', 150, 'Gentil', '15cm');
console.log(figObj);
console.log( figObj.calcPriceTTC() );

const figObj2 = new Figurine('Final', 457, 'Gentil', '55cm');
console.log(figObj2);
console.log( figObj2.calcPriceTTC() );

try {

    const emptyFig = new Figurine();
    console.log(emptyFig);
} catch (error) {
    console.log(error.message);

}
