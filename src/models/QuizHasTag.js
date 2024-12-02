import { DataTypes, Model } from 'sequelize';
import { sequelizeClient } from '../database/sequelize.js';

class QuizHasTag extends Model {}

QuizHasTag.init(
    {
        quiz_id: DataTypes.INTEGER,
        tag_id: DataTypes.INTEGER,
    },
    {
        sequelize: sequelizeClient,
        tableName: 'quiz_has_tag',
    }
);

export { QuizHasTag };
