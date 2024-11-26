# La programmation orientée objet

---

## Les classes

La POO est une façon de développer des applications au moyen d'objets dont on se sert pour décrire entre autre des entités d'un MCD ou des éléments HTML en code.

Dans la plupart de langages dits orientés objets, ces objets sont créés avec des classes.

JavaScript possède une syntaxe permettant de créer des objets à partir de classes, qui servent alors de définitions, ce qui signifient que les objets créés à partir de cette classe, auront tous la même forme : les mêmes propriétés (on ne pourra pas faire d'erreurs dans leurs noms comme si on faisait des objets littéraux), et les mêmes méthodes (fonctions).

Une classe est un ensemble qui peut être composé de propriétés, et de fonctions (que l'on appelle méthode dans une classe), qui permettent d'implémenter des fonctionnalités bien précises.

Les objets créés avec des classes, que l'on appelle des instances, servent à manipuler des données, qu'elles soient issues du DOM, ou d'une BDD, ou d'un calcul par exemple.

> Une classe ne doit faire qu'une seule chose, elle n'a qu'une responsabilité.

Quand on développe une application, il peut arriver de temps à autre qu'on rencontre des bugs, on va donc introduire les classes en créant une classe de gestion d'erreur, issues du DOM. Le nom de la classe doit être choisi en tenant compte de la fonctionnalité qu'elle va implémenter.

Par convention, le nom d'une classe est écrite avec la première lettre en majuscule.

```javascript
class HtmlError {
    //
}
```

Avec cette simple déclaration, on peut déjà instancier cette classe (créer un objet) :

```javascript
const htmlError = new HtmlError();
console.log(htmlError);
```

On peut voir dans la console un objet, qui ne sert à rien, mais la base est là.

Faisons en sorte que cet objet serve à nous afficher des erreurs dans la console. Pour ça il nous faut au moins une chose : une variable qui sert à enregistrer un message d'erreur, cette variable s'appelle une propriété ou une variable membre.

```javascript
class HtmlError {
    // * la propriété est déclaré directement en la nommant : pas de let ou de const
    errorMessage;
}
```

 On peut constater la différence si on console.log à nouveau notre instance de classe, on peut voir que cette propriété est à maintenant une valeur `undefined`. Alors comment lui faire enregistrer un message ?

## To this or not to this

### Constructeur

Pour assigner une vraie valeur à cette variable, il y a plusieurs solutions, la plus simple est d'assigner une valeur à l'objet déjà fait :

```javascript
const htmlError = new HtmlError();
htmlError.errorMessage = 'Un truc horrible s\'est produit';
console.log(htmlError);
```

On peut voir que ça marche très bien, on pourrait se servir de cette classe sans rien changer, mais on peut aussi faire appelle à une méthode (fonction) dite 'magique', que l'on appelle le constructeur. Le constructeur est une méthode qui va être appelé automatiquement quand on instancie la classe.

Pour se servir d'un constructeur, il faut le définir dans la classe, ainsi que lui indiquer ce qu'il doit faire :

```javascript
class HtmlError {
    errorMessage;

    // * On ne choisit pas le nom constructor(), il fait partie de JavaScript.
    constructor() {
        console.log('Je suis appelé automatiquement');
    }
}
```

On instancie la classe et on peut voir dans la console que le constructeur est appelé automatiquement.

### this

Le constructeur ne sert pas qu'à console.logguer une string, il sert à initialiser l'objet en le configurant.

On fait ça grâce au mot clé this, ce mot clé désigne l'objet que l'on crée, il y fait référence depuis l'intérieur de la classe :

```javascript
class HtmlError {
    errorMessage;

    constructor() {
        this.errorMessage = 'Je suis appelé automatiquement';
    }
}
```

On voit maintenant dans la console que la propriété errorMessage a une valeur. C'est très bien, mais on ne va pas laisser une string coder en dur dans le constructeur, ce n'est pas très flexible.

Le constructeur est une méthode dite 'magique' dans le sens ou il est appelé automatiquement à l'instanciation, mais sinon c'est une méthode comme une autre, on peut le paramétrer et donc argumenté notre classe quand on l'instancie :

```javascript
class HtmlError {
    errorMessage;
    // * un paramètre
    constructor(message) {
        // * on assigne le paramètre à la propriété au moment ou on instancie la classe
        this.errorMessage = message;
    }
}

// * on argumente directement dans la classe : c'est le constructeur qui récupère ça
const htmlError = new HtmlError('Un truc horrible s\'est produit');
console.log(htmlError);
console.log(htmlError.errorMessage);
```
