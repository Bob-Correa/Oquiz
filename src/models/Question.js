import { DataTypes, Model } from 'sequelize';
import { sequelizeClient } from '../database/sequelize.js';

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
        level_id: DataTypes.INTEGER,
    },
    {
        sequelize: sequelizeClient,
        tableName: 'question',
    }
);

export { Question };
