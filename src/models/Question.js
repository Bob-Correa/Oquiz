import { DataTypes, Model } from 'sequelize';
import { sequelizeClient } from '../database/sequelize.js';
//  la ligne ci-dessou n'est utile que si on définit la clé étrangère dans le modèle
// import { Level } from './Level.js';

class Question extends Model {}

Question.init(
    {
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        anecdote: DataTypes.TEXT,
        wiki: DataTypes.TEXT,
        quiz_id: DataTypes.INTEGER,

        level_id: {
            type: DataTypes.INTEGER,
            // définition de la clé étrangère dans le modèle
            // references: {
            //     model: Level,
            // },
        },
    },
    {
        sequelize: sequelizeClient,
        tableName: 'question',
    }
);

export { Question };
