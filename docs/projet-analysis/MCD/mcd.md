# Le MCD

---

Vacuous truth : <https://en.wikipedia.org/wiki/Vacuous_truth>

Définition de MCD : <https://cours-info.iut-bm.univ-fcomte.fr/upload/supports/S1/BdD/3.MCD-KD.pdf>

Objectif du MCD : Décrire les données du SI, indépendamment de tout choix d'implantation physique.

---

Le client (une école) veut un projet de plateforme de quiz pour les élèves avec interface de connexion pour que les élèves puissent s'authentifier.

Chaque quiz aura un titre, une description et un ou des sujets associés et sera écrit par un auteur.

Les quiz contiennent des questions, chacune avec un titre, une explication, des réponses possibles, un contexte, et un niveau de difficulté (débutant, confirmé, expert).

Les questions ont une bonne réponse et plusieurs propositions de réponse.

Les utilisateurs qui répondent aux quiz verront un récapitulatif des résultats avec score et validation des réponses. Les scores ne seront affichés qu'une fois.
On a besoin de schémas faut montrer le cheminement des données, ce qu'on pense faire avec les données.

---

On doit décrire des entités avec des attributs, définir des cardinalités

```text
THEME : code theme, nom
Appartenir, 0N QUIZ, 0N THEME
QUIZ : code quiz, titre, description
Contenir, 0N QUIZ, 11 QUESTION
QUESTION : code question, titre, wiki, anecdote
Posséder, 11 REPONSE, 0N QUESTION
REPONSE : code réponse, description, est valide

:
UTILISATEUR : code utilisateur, email, prénom, nom, mot de passe
CREER, 0N UTILISATEUR, 11 QUIZ
NIVEAU : code niveau, nom
Déterminer, 11 QUESTION, 0N NIVEAU
:
:
```

Thème et Quiz sont associés ? oui : NN appartenir
Quiz et Question sont associés ? oui : CONTENIR 1N
Quiz et Utilisateur (auteur) sont associés ? oui : CREER 0N quiz
Question et Reponse sont associés ? oui : POSSEDER 0N
Niveau et Question sont associés ? oui : DEFINIR 0N4
