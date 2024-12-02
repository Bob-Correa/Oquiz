// le client a besoin de l'URL de connexion à la BDD
//  quand on fait node install.js : on est pas dans le contexte de l'application don c on n'a pas les variables d'environnement
// c'est pour cette raison qu'on importe dotenv
import 'dotenv/config';

// on importe les modèles qui ont été associé
// on importe le client depuis le fichier dans lequel les modèles ont été associé
import {
    User,
    Tag,
    Level,
    Question,
    Quiz,
    Answer,
    QuizHasTag,
    sequelizeClient,
} from './src/models/associations.js';

async function createTables() {
    // l'option force; true va forcer le drop en ignorant les contraintes
    // la méthode .drop efface la table de la BDD
    // await User.drop({ force: true });
    // * la méthode .sync() sert à créer une table dans une base de données
    // * l'option force: true efface et recréé la table
    // await User.sync({ force: true });
    // await Quiz.sync({ force: true });
    // await Level.sync({ force: true });
    // await Tag.sync({ force: true });
    // await Question.sync({ force: true });
    // await Answer.sync({ force: true });
    // await QuizHasTag.sync({ force: true });

    // * la commande ci dessous sert à faire un export de la BDD pour la sauvegarder
    // ! pg_dump -U oquiz > backup.sql

    // la méthode .sync() avec le client va effacer et recréé toutes les tables de ls BDD
    await sequelizeClient.sync({ force: true });

    // await sequelizeClient.drop({ force: true });

    // insertion de données en masse avec sequelize
    // await User.bulkCreate([
    //     {
    //         firstname: 'loreznoz',
    //         lastname: 'loreznoz',
    //         email: 'email@email.com',
    //         password: 'secretpass',
    //     },
    //     {
    //         firstname: 'loreznoz',
    //         lastname: 'loreznoz',
    //         email: 'email@email.fr',
    //         password: 'secretpass',
    //     },
    //     {
    //         firstname: 'loreznoz',
    //         lastname: 'loreznoz',
    //         email: 'email@email.us',
    //         password: 'secretpass',
    //     },
    //     {
    //         firstname: 'loreznoz',
    //         lastname: 'loreznoz',
    //         email: 'email@email.uk',
    //         password: 'secretpass',
    //     },
    //     {
    //         firstname: 'loreznoz',
    //         lastname: 'loreznoz',
    //         email: 'email@email.ga',
    //         password: 'secretpass',
    //     },
    //     {
    //         firstname: 'loreznoz',
    //         lastname: 'loreznoz',
    //         email: 'email@email.dev',
    //         password: 'secretpass',
    //     },
    // ]);

    // termine la fonction
    // process c'est nodejs qui exécute la fonction, comme on attend rien en retour de cette fonction, lorsque les promesses ont été exécutée, on coupe le process nodejs
    process.exit();
}

createTables();
