# Architecture

---

Spécification :

- [x] installer npm / mettre à jour  node - npm
  - [x] `nvm install 22`
  - [x] `nvm alias default 22`
  - [x] pour changer de version de node : `nvm use numéro de version` : `nvm use 20`
- [x] npm init -y
- [x] package.json => type: module
- [x] installer les modules express, ejs, pg, dotenv
- [x] installer les modules de dèv : `npm i -D nodemon prettier eslint`
- [x] .gitignore
- [x] faire les scripts npm
- [ ] .env et .env.example

### prettier

Pour mettre en place, on le configure dans package.json, on s'assure d'avoir installer et activer l'extension vscode prettier.
Dans les paramètres de vscode, on s'assure d'avoir cocher `prettier enable` et `format on save`, et de choisir prettier comme `default formatter`

### eslint

eslint n'a besoin que d'un fichier de config et de l'extension `vscode`
