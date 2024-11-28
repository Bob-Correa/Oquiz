//  * Model est le CoreModel de sequelize, on va en hériter
import { Model, DataTypes, literal } from 'sequelize';
import { sequelizeClient } from '../database/sequelize.js';

class Tag extends Model {}

//  * on va passer 2 objets en argument
//  * le premier objet sert à définir les attributs du modèle
//  * le deuxième objet sert à définir les métadonnées du modèle et à lui dire comment se connecter à la BDD
Tag.init(
    {
        // * définition de l'ID à la main, si on souhaite customiser par rapport à ce que fait sequelize
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        name: {
            type: DataTypes.TEXT,
            // équivalent à NOT NULL en SQl
            allowNull: false,
        },

        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            // * si on met pas literal avec le timestamp, sequelize va tenter d'enregistrer la string CURRENT_TIMESTAMP, ce qui provoquera une erreur car postgres détectera un type de donnée qui n'est pas une date
            defaultValue: literal('CURRENT_TIMESTAMP'),
        },

        updated_at: {
            type: DataTypes.DATE,
        },
    },
    {
        sequelize: sequelizeClient,
        tableName: 'tag',
    }
);

export { Tag };
