import { join } from 'node:path';

import 'dotenv/config';
import express from 'express';
import session from 'express-session';

import { router } from './src/routers/router.js';
import { notFound } from './src/middlewares/errorHandlers/notFound.js';
import { initUserSession } from './src/middlewares/initUserSession.js';
import { errorHandler } from './src/middlewares/errorHandlers/handlers.js';

const app = express();

// cookie expires in ms
const inOneDay = 24 * 3600 * 1000;
app.use(
    session({
        secret: process.env.SECRET,
        resave: true,
        saveUninitialized: true,
        cookie: {
            // pas de https = secure false
            secure: false,
            maxAge: inOneDay,
            httpOnly: true,
        },
    })
);

app.use(initUserSession);

// branchement du template engine ejs
app.set('view engine', 'ejs');
// on dit à express ou trouver les fichier ejs
app.set('views', join(import.meta.dirname, 'src/views'));
// on dit à express ou se trouve les fichiers css, js front, images, favicon etc etc
app.use(express.static(join(import.meta.dirname, 'public')));

// branchement du middleware qui permet d'avoir req.body
// on ne peut pas avoir req.body sans brancher le middleware express.urlencoded
// l'option extended false permet de changer le module qui va parser le formulaire
//  si extended est false : le module qui va parser le formulaire est bodyParser qui est le module par historique d'express
//  si extended est true : le module est qs qui va parser le formulaire
app.use(express.urlencoded({ extended: false }));

// branchement du routeur
app.use(router);

app.use(notFound);

app.use(errorHandler);

// * app.set : on ajoute un clé sur l'objet app
app.set('port', process.env.PORT || 3000);
app.set('baseUrl', process.env.BASE_URL || 'http://localhost');

app.listen(app.get('port'), () => {
    console.log(`Listening on ${app.get('baseUrl')}:${app.get('port')}`);
});
