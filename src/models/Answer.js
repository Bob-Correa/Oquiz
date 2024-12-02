import { DataTypes, Model } from 'sequelize';
import { sequelizeClient } from '../database/sequelize.js';

class Answer extends Model {}

Answer.init(
    {
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        question_id: DataTypes.INTEGER,

        is_valid: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        sequelize: sequelizeClient,
        tableName: 'answer',
    }
);

export { Answer };
