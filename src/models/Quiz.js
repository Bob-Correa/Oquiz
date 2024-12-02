import { Model, DataTypes } from 'sequelize';
import { sequelizeClient } from '../database/sequelize.js';

class Quiz extends Model {}

Quiz.init(
    {
        title: {
            type: DataTypes.TEXT,
            unique: true,
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        user_id: DataTypes.INTEGER,
    },
    {
        sequelize: sequelizeClient,
        tableName: 'quiz',
    }
);

export { Quiz };
