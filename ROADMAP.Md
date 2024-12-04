# Installer un projet cloné

---

- cloné le projet
- Se déplacer dans le projet
- `npm i` (installer les dépendances)
- Créer la BDD correspondante au projet
- Faire un fichier .env (variable d'environnement)
- Lire le README au cas ou il contient des précisions à propos de l'installation d'un projet
- tester le projet `npm run dev`
- lire package.json (les scripts, les dépendances)
- lire le code

---

> La page d'accueil doit à présent afficher dynamiquement les quiz avec leur description, ainsi que le nom/prénom de leurs auteurs et les thèmes associés au quiz.

> Et pourquoi pas une page qui liste les thèmes, et sous chaque thème, un lien vers les quiz qui comportent ces thèmes ?

- <https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#ordering>
- [x] bonus order by pour l'accueil

- [x] lien vers la page
- [x] route qui va gérer le lien précédent
- [x] une méthode / controlleur qui envoie la page au navigateur
- [x] il faut une vue
- [x] afficher une page
- [x] on doit récupérer les données
- [x] on doit récupérer les données avec leur associations éventuels
- [x] on doit afficher les données sur la page

## Ajout de l'attribut role sur la table

- [x] modifier le mcd
- [x] modifier le mld
- [x] modifier la table user
- [x] modifier le modèle JS

## Créer un User

- [x] récupérer les infos du formulaire de création de compte
- [x] brancher un middleware dans express pour avoir req.body
- [ ] valider chaque champ du formulaire (les champs obligatoires doivent être remplis)
- [ ] valider le format de l'email
- [ ] valider la longueur du mot de passe
- [ ] hasher le mot de passe
- [ ] créer le user en BDD
