import 'dotenv/config';
import { join } from 'node:path';
import express from 'express';
import { router } from './src/router.js';

const app = express();

// branchement du template engine ejs
app.set('view engine', 'ejs');
// on dit à express ou trouver les fichier ejs
app.set('views', join(import.meta.dirname, 'src/views'));

// on dit à express ou se trouve les fichiers css, js front, images, favicon etc etc
app.use(express.static(join(import.meta.dirname, 'public')));

// branchement du routeur
app.use(router);

// * app.set : on ajoute un clé sur l'objet app
app.set('port', process.env.PORT || 3000);
app.set('baseUrl', process.env.BASE_URL || 'http://localhost');

app.listen(app.get('port'), () => {
    console.log(`Listening on ${app.get('baseUrl')}:${app.get('port')}`);
});
