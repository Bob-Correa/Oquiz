import { Answer } from './Answer.js';
import { Level } from './Level.js';
import { Question } from './Question.js';
import { Quiz } from './Quiz.js';
import { QuizHasTag } from './QuizHasTag.js';
import { Tag } from './Tag.js';
import { User } from './User.js';
// import / export du client pour le mettre au courant que nos modèles sont associés
import { sequelizeClient } from '../database/sequelize.js';
// * ici on fait les associations entre chaque modèle
// ? User et Quiz sont associés : quelle est le type d'association : one to many
//  l'association one to many
// on utilise la méthode hasMany pour associer les deux modèles
// dans le cadre d'une méthode hasMany, on trouve la clé étrangère sur le modèles B (Quiz)
User.hasMany(Quiz, {
    foreignKey: 'user_id',
    // * l'alias dont on va se servir pour récupérer les quiz d'un utilisateur
    as: 'quizzes',
});

// la réciproque : la one to one
Quiz.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'author',
});

//  * Question est associé à Answer : one to many
Question.hasMany(Answer, {
    foreignKey: 'question_id',
    as: 'proposals',
});

Answer.belongsTo(Question, {
    foreignKey: 'question_id',
    as: 'question',
});

//  * Question est associé à Quiz
Quiz.hasMany(Question, {
    foreignKey: 'quiz_id',
    as: 'questions',
});

Question.belongsTo(Quiz, {
    foreignKey: 'quiz_id',
    as: 'quiz',
});

//  * Question est associé à Level
Level.hasMany(Question, {
    foreignKey: 'level_id',
    as: 'questions',
});

Question.belongsTo(Level, {
    foreignKey: 'level_id',
    as: 'level',
});

//  * Quiz est associé à Tag :
// * Avec la méthode belongsToMany : le modèle A donne son nom à la clé étrangère
//  ! si on n'a pas représenté la table de liaison avec un modèle, le through est le nom de la table de liaison
Quiz.belongsToMany(Tag, {
    foreignKey: 'quiz_id',
    otherKey: 'tag_id',
    // le through représente la table de liaison
    through: QuizHasTag,
    as: 'tags',
});

Tag.belongsToMany(Quiz, {
    foreignKey: 'tag_id',
    otherKey: 'quiz_id',
    through: QuizHasTag,
    as: 'quizzes',
});

export {
    Answer,
    Level,
    Question,
    Quiz,
    Tag,
    User,
    sequelizeClient,
    QuizHasTag,
};
