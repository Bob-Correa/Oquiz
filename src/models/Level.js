//  * Model est le CoreModel de sequelize, on va en hériter
import { Model, DataTypes } from 'sequelize';
import { sequelizeClient } from '../database/sequelize.js';

class Level extends Model {}

//  * on va passer 2 objets en argument
//  * le premier objet sert à définir les attributs du modèle
//  * le deuxième objet sert à définir les métadonnées du modèle et à lui dire comment se connecter à la BDD
Level.init(
    {
        name: DataTypes.TEXT,
    },
    {
        sequelize: sequelizeClient,
        tableName: 'level',
    }
);

export { Level };
