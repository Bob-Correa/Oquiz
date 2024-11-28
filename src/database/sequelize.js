//  ! impport temporaire pour tester la connexion avec sequelize
// import 'dotenv/config';
import { Sequelize } from 'sequelize';

const sequelizeClient = new Sequelize(process.env.PG_URL, {
    dialect: 'postgres',
    define: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
});

// const sequelizeClient = new Sequelize('oquiz', 'oquiz', 'oquiz', {
//     host: 'localhost',
//     dialect: 'postgres',
// });
// try {
//     await sequelizeClient.authenticate();
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }

export { sequelizeClient };
