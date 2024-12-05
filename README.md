# S11 - O'quiz

---

## Mise en place d'un WORKFLOW git & github

- [ ] afficher les erreurs liés à la création de compte
  - [x] on doit aller lire les issues
  - [x] créer une branche avec git et l'envoyer sur github [voir recap](RECAP-GIT.md)

---

## Challenge Episode 7 et 8

**Libre !**

- Finir les exercices commencés en Cockpit

- Rajouter des fonctionnalités au choix :
  - des pages d'éditions pour les `Tag` (similaire aux pages des `Level`)
  - faire la fonctionnalité de login
  - faire la fonctionnalité de logout
  - une gestion plus fine des droits et rôle.
  - rajouter la fonctionnalité pour **jouer** réellement le quiz et avoir le résultat !
  - rajouter un champ dans un model :
    - par exemple, pour pouvoir choisir la couleur des badges des `Level` qui pour le moment sont tous similaires
  - rajouter un modèle dans notre bazar :
    - par exemple, pour stocker les résultats des quiz d'un utilisateur et les afficher sur sa page de profil !
  - _la seule limite est ton `i-m-a-g-i-n-a-t-i-o-n` !_

## Session

Pour enregistrer un mot de passe en BDD : on la hache (hash)

- Quand on hash un mot de passe, on ne peut pas le déhasher,hasher est une action irréversible
- On ne crypte pas qqchose mais on le chiffre, ce qui est chiffré peut être déchiffré
- On ne dit jamais crypter qqchose <https://chiffrer.info/>

## Prep work

On installe et on lance le projet en autonomie !

<details><summary>
Tips en cas de difficulté
</summary>

Au hasard :

- `npm install`
- `.env` avec les bonnes valeurs 😉
- créer l'user et la BDD `oquiz` si ça n'a pas été fait
- checker les `scripts npm` si besoin

</details>

## Etape 1 - Home page

La `page d'accueil` doit à présent afficher **dynamiquement** les `quiz` avec leur description, ainsi que le nom/prénom de leurs `auteurs` et les `thèmes` associés au quiz.

## Etape 2 - Page d'un quiz

Une page pour visualiser un `quiz`, avec :

- ses `thèmes`
- ses `questions`
  - la `difficulté` de chaque question
  - et les `réponses possibles` à chaque question

On vous fournit une intégration dans le dossier `integration`.

## Etape 3 - Page des thèmes/catégories (tags)

Et pourquoi pas une page qui liste les `thèmes`, et sous chaque thème, un lien vers les `quiz` qui comportent ces thèmes ?

On vous fournit une intégration dans le dossier `integration`.

## Etape 4 - Les bonus d'échauffement

Les liens :

- ajouter tous les liens qui pourraient manquer ! Il y a surement des endroits de l'application où il serait intéressant pour l'utilisateur de pouvoir cliquer, afin de rendre la navigation plus fluide !

Home page :

- les `quiz` doivent être affichés par ordre alphabétique de leur titre. [CF DOC](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#ordering).

Controllers :

- Pensez aux `try/catch` autour des requêtes en base de données, et renvoyer une page d'erreur en cas de problème.

Page non trouvée :

- Et la 404 dans tout ça ?

## Etape 5 - Bonus de la mort qui tue

Rajouter les pages des formulaires d'**inscription** et de **connexion**.

Avec tout ce qui est nécessaire 💪 (par ordre de difficulté):

- [ ] les vues
- [ ] conserver le fait que l'utilisateur soit loggé dans la session de l'utilisateur (`express-session`)
- [ ] hashage du mot de passe à l'inscription en utilisant un module npm ! (`bcrypt or not bcrypt`)
- [ ] création de l'utilisateur dans la base de données après soumission du formulaire.
- [ ] empêcher les utilisateurs non loggés de pouvoir éditer/supprimer les `Levels`

---

## S10 - Oquiz

---

## Challenge Episode 4

On a un super ORM. On est plutôt bien !

On rajouterait pas quelques légumes (modèles) dans notre soupe (O'quiz) ?

## Partie 1

Ajouter les `models` manquants, qui n'ont pas encore été traités en Cockpit :

- `User`
- `Question`
- `Answer`
- `Quiz`

Et on oublie pas de tester ! Par exemple, dans un controlleur qui porte le nom du modèle que l'on teste :

- récupérer toutes les questions.
- trouver la question dont l'ID est 3.
- créer un niveau `très difficile` et l'insérer en BDD.
- …

## Partie 2 - Le BONUS qui pique (facultatif)

Exploratoire, mais sera corrigé !

- **Récupérer une `Question` en incluant son `Level` associé.**

Indices :

- Oui, c'est l'équivalent d'une _jointure_ SQL...
  - mais avec `Sequelize`, c'est vachement moins verbeux !
- Il faut toutefois mettre en place/déclarer l'association
  - <https://sequelize.org/docs/v6/core-concepts/assocs/>

---

- [x] trouver le mot qui décrit ce qui se passe quand on réplique BDD : préserver l'intégrité des données
- [x] CRUD : Create, Read, Update, Delete

---

# Challenge Episode 3

## Partie 1

Les méthodes Active Record du modèle `Level` ont été codées 🎉 !

On a pu vérifier que ces méthodes fonctionnent en jouant dans homeController.js.

En s'inspirant (très largement) de ce code existant, on passe à la suite :

**coder les méthodes Active Record du modèle User**

- [x] `findAll()` : trouve tous les Users dans la base de données. (static)
- [x] `findById(id)` : trouve un User en fonction de son ID. (static)
- [x] `findByEmail(email)` : trouve un User par son email. (static)
- [x] `create()` : insert l'instance courante dans la base de données. (static)
- [x] `update()` : met à jour l'instance courante dans la base de données. (attention, ça peut-être touchy)
- [x] `destroy()` : supprime l'instance courante de la base de données.

Et on oublie pas de tester ses méthodes et leur bon fonctionnement dans un fichier de test approprié :)

## Partie 2 - Bonus casse-tête

(Attention, très exploratoire !)

On a quand même pas mal de code qui se ressemble, non ? On pourrait commencer à réfléchir à factoriser tout ce beau monde ?

Par exemple la méthode `Level.findAll()` va beaucoup ressembler à celle de `User.findAll()`.

Il doit y avoir moyen de faire quelque chose dans le `CoreModel` !

---

## Challenge Episode 2

## Partie 1 - Les classes

En s'inspirant des classes déjà écrites en cours (ex : `Tag` ou `Level`) pour notre projet `oquiz`,
**créer les classes pour toutes les entités de notre application !**

- Une classe par entité et par fichier : `Answer`, `Level`, `Question`, `Quiz`, `Tag`, et `User`.
- Ajouter au dossier `src/models`
- Ne pas oublier d'exporter chaque classe.
- Ne pas oublier les `constructor`s : ils doivent prendre en paramètre un **objet** contenant toutes les valeurs des attributs pour l'instance.

<details>
<summary>Heuuu oui... t'as un exemple ?</summary>

Le but est d'arriver à instancier les entités de cette manières :

```JS

const monTag = new Tag({ name: "un super tag" });
```

Donc, on devrait donc avoir un constructeur du genre...

```JS
class Tag {
  constructor(obj) {
    this.name = obj.name;
  }
};
```

</details>

Notes :

- dans un premier temps, il n'est pas necessaire d'ajouter des setter/getter pour chaque propriété. Les propriétés peuvent très bien toutes rester publiques, selon votre préférence.
  - vous pouvez tester les deux pour voir, bien sûr !
- il n'est pas necessaire d'ajouter des validations pour chaque propriété au niveau du constructeur (et des setters).
  - vous pouvez tester d'en ajouter, bien sûr !

## Partie 2 - Un brin d'héritage

_Do not repeat yourself..._

La propriété `id` est présente dans toutes les classes.
On va donc... la factoriser ! Et pour ce faire, on va utiliser l'héritage !

On propose de créer une classe `CoreModel`, dans le même dossier que les autres, et toutes les classes vont _hériter_ de celle-ci :

- Penser à exporter `CoreModel`.
- Penser à require `CoreModel` dans les autres fichiers.
- Penser à appeler le "constructeur parent" dans les constructeurs des classes filles.

## Des bonus ?

<details><summary>
Partie 3 - Getters / Setters
</summary>

Dans chaque classe, à commencer par `CoreModel`, coder un "getter" et un "setter" pour les propriétés.

On pense donc à passer les propriétés en `private`, sinon avoir des "getters" et "setters" ne sert à rien !

<details>
<summary>Un exemple </summary>

```js
class CoreModel {
  #id;

  get id() {
    return this.#id;
  };

  set id(value) {
    this.#id = value;
  };
};
```

</details>

Note : oui, c'est long et fastidieux. C'est un bonus !

</details>

<details><summary>
Partie 4 - Validation
</summary>

### Dans les setters

Dans les "setters", rajouter des tests pour vérifier que la donnée passée en argument est du type attendu pour la propriété.

<details>
<summary>Un exemple pour l'ID</summary>

```js
class CoreModel {
  #id;

  set id(value) {
    if (typeof value !== 'number') {
      throw Error("CoreModel.id must be a number !"); // on "lève" une erreur => ça arrête tout !
    }

    this.#id = value;
  }
};
```

</details>

### Dans les constructeurs

Le même principe est possible dans les constructeurs ! On contrôle les valeurs utilisées par l'appelant à l'instanciation.

</details>

## Challenge Episode 1

## Partie 1 - MLD

En utilisant l'analyse préliminaire de la BDD, le MCD, et les [fiches récap Kourou](https://kourou.oclock.io/ressources/fiche-recap/mld),
**écrire le MLD de l'application** ! Un simple fichier texte fera l'affaire pour le MLD

Rappel : la difficulté de cet exercice de traduire les associations entre les entités, en termes de clé primaire / clé étrangère / table de liaisons, selon les cardinalités spécifiées dans le MCD.

## Partie 2 - Setup BDD

Créer un utilisateur et une BDD pour le projet `oquiz` dans Postgres, à l'aide des [commandes habituelles](https://kourou.oclock.io/ressources/fiche-recap/postgresql/)

# Des bonus à foisons

Les parties suivantes seront corrigés (très) rapidement demain. Elles sont donc facultatives et exploratoires.
L'objectif est de vous familiariser avec les scripts SQL de creation de tables et de remplissage de tables (seeding).

## Partie 3 - Creation des tables

Créer un fichier `data/create_tables.sql` dont le but est de générer les tables suivantes dans la base `oquiz`, en suivant les spécifications du MLD :

- `Tag`
- `User`
- `Quiz` (ici, il faudra penser à traduire l'association `User <-> Quiz`)

(Optionnel : vous pouvez faire les autres tables, mais c'est long !)

Exécuter ce fichier à l'aide de `psql` et vérifier le bon état des tables.

Optionnel : ajouter un **script npm** `db:create` dans le `package.json` afin de lancer automatiquement la commande `psql` depuis le projet.

## Partie 4 - Seeding des tables

Créer un fichier `data/populate_tables.sql` pour remplir la BDD ! Y insérer :

- quelques `Tag`
- quelques `User`
- quelques `Quiz`

Exécuter ce fichier à l'aide de `psql` et vérifier le bon état des tables.

Optionnel :

- ajouter un **script npm** `db:seed` dans le `package.json` afin de lancer automatiquement la commande `psql` depuis le projet.
- ajouter un **script npm** `db:reset` dans le `package.json` afin de lancer automatiquement les commandes `db:create` et `db:reset` !

## Partie 5 - Wireframes

Bon, et si vraiment vous vous ennuyez et que les wireframes n'ont pas été terminées en cockpit, n'hésitez pas à faire des jolis wireframes pour les pages qui nous manque !

## E01 - Gestion de projet

Le pitch du client :

<https://drive.google.com/drive/folders/1VU_o3X32oE5-Kp-7jNHL1KT0hxigSc4Z>

### Le plan

1. [x] user story
2. [x] wireframes <https://blog-ux.com/quelle-est-la-difference-entre-le-zoning-wireframe-mockup-et-prototype/>
3. [x] mcd
4. [ ] mld
5. [ ] mpd
