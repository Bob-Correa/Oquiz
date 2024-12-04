import { Model, DataTypes } from 'sequelize';
import { sequelizeClient } from '../database/sequelize.js';

class User extends Model {
    get fullname() {
        return `${this.firstname} ${this.lastname}`;
    }
}

User.init(
    {
        firstname: DataTypes.TEXT,
        lastname: DataTypes.TEXT,
        email: {
            type: DataTypes.TEXT,
            //  on s'assure que ce champ est un email
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.TEXT,
            // * on teste le mot de passe : on indique qu'il doit avoir 8 caractères mini
            validate: {
                len: {
                    args: [8],
                    msg: 'Le mot de passe doit contenir au moins 8 caractères',
                },
            },
        },
        role: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: 'user',
        },
    },
    {
        sequelize: sequelizeClient,
        tableName: 'user',
    }
);

export { User };
