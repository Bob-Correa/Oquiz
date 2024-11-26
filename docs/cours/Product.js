//  * les classes en javascript
// * Pour nommer une classe, on utilise le KebabCase : la première lettre de chaque mot qui forme le nom de cette classe est en majuscule
class Product {
    // * On définit les propriétés qui composent notre objet
    name;
    // * on veut protéger la propriété priceHT afin qu'elle ne soit pas modifié par mégarde et provoque des pertes : on la rend privée (on empêche la lecture de cette propriété depuis l'extérieur de la classe et surtout on empêche ses modifications)
    #priceHT;
    priceTTC;
    category;

    // * Un constructeur est une méthode dite magique : c'est une méthode qui s'exécute toute seule au moment ou on instancie une classe
    // * En POO, une fonction dans une classe s'appelle une méthode
    // * Il n'y a qu'un seul constructeur par classe
    constructor(name, price, category) {
        // * si le type de name est null ou undefined
        if (!name) {
            // * le mot clé throw sert à lever une erreur et coupe l'exécution du code
            throw new Error('Le name est obligatoire');
        }
        // * On doit assigner les données reçues aux propriétés de notre objet, grace au mot clé this
        // console.log('THIS', this);
        // * Dans un classe le mot clé this représente l'objet courant : celui sur lequel on est en train de créer / d'agir
        this.name = name;
        this.#priceHT = price;
        this.category = category;
        this.priceTTC = this.calcPriceTTC();
    }

    // * accesseur pour lire la propriété privée #priceHT
    get priceHT() {
        return this.#priceHT;
    }

    // * un mutateur / setter sert à modifier la valeur d'une propriété privée
    // * le mot clé set permet de préfixer le nom d'une méthode pour en faire un mutateur
    set priceHT(newValue) {
        this.#priceHT = newValue;
        this.priceTTC = this.calcPriceTTC();
    }

    // * Cette méthode calcule le prix TTC d'une figurine à partir du prix HT définit dans la classe
    calcPriceTTC() {
        return this.priceHT * 1.2;
    }
}

export { Product }