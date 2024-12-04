SELECT
    "User"."id",
    "User"."firstname",
    "User"."lastname",
    "User"."email",
    "User"."password",
    "User"."created_at",
    "User"."updated_at",
    "quizzes"."id" AS "quizzes.id",
    "quizzes"."title" AS "quizzes.title",
    "quizzes"."description" AS "quizzes.description",
    "quizzes"."user_id" AS "quizzes.user_id",
    "quizzes"."created_at" AS "quizzes.created_at",
    "quizzes"."updated_at" AS "quizzes.updated_at"
FROM
    "user" AS "User"
    LEFT OUTER JOIN "quiz" AS "quizzes" ON "User"."id" = "quizzes"."user_id"
WHERE
    "User"."id" = 1;

SELECT
    "User"."id",
    "User"."firstname",
    "User"."lastname",
    "User"."email",
    "User"."password",
    "User"."created_at",
    "User"."updated_at",
    "quizzes"."id" AS "quizzes.id",
    "quizzes"."title" AS "quizzes.title",
    "quizzes"."description" AS "quizzes.description",
    "quizzes"."user_id" AS "quizzes.user_id",
    "quizzes"."created_at" AS "quizzes.created_at",
    "quizzes"."updated_at" AS "quizzes.updated_at"
FROM
    "user" AS "User"
    LEFT OUTER JOIN "quiz" AS "quizzes" ON "User"."id" = "quizzes"."user_id";

SELECT
    "Level"."id",
    "Level"."name",
    "Level"."created_at",
    "Level"."updated_at",
    "questions"."id" AS "questions.id",
    "questions"."description" AS "questions.description",
    "questions"."anecdote" AS "questions.anecdote",
    "questions"."wiki" AS "questions.wiki",
    "questions"."quiz_id" AS "questions.quiz_id",
    "questions"."level_id" AS "questions.level_id",
    "questions"."created_at" AS "questions.created_at",
    "questions"."updated_at" AS "questions.updated_at"
FROM
    "level" AS "Level"
    LEFT OUTER JOIN "question" AS "questions" ON "Level"."id" = "questions"."level_id";

SELECT
    "Quiz"."id",
    "Quiz"."title",
    "Quiz"."description",
    "Quiz"."user_id",
    "Quiz"."created_at",
    "Quiz"."updated_at",
    "questions"."id" AS "questions.id",
    "questions"."description" AS "questions.description",
    "questions"."anecdote" AS "questions.anecdote",
    "questions"."wiki" AS "questions.wiki",
    "questions"."quiz_id" AS "questions.quiz_id",
    "questions"."level_id" AS "questions.level_id",
    "questions"."created_at" AS "questions.created_at",
    "questions"."updated_at" AS "questions.updated_at"
FROM
    "quiz" AS "Quiz"
    LEFT OUTER JOIN "question" AS "questions" ON "Quiz"."id" = "questions"."quiz_id";

INSERT INTO
    "user" (
        "id",
        "firstname",
        "lastname",
        "email",
        "password",
        "created_at",
        "updated_at"
    )
VALUES
    (
        DEFAULT,
        'loreznoz',
        'loreznoz',
        'email@email.com',
        'secretpass',
        '2024-12-02 12:54:06.090 +00:00',
        '2024-12-02 12:54:06.090 +00:00'
    ),
    (
        DEFAULT,
        'loreznoz',
        'loreznoz',
        'email@email.fr',
        'secretpass',
        '2024-12-02 12:54:06.090 +00:00',
        '2024-12-02 12:54:06.090 +00:00'
    ),
    (
        DEFAULT,
        'loreznoz',
        'loreznoz',
        'email@email.us',
        'secretpass',
        '2024-12-02 12:54:06.090 +00:00',
        '2024-12-02 12:54:06.090 +00:00'
    ),
    (
        DEFAULT,
        'loreznoz',
        'loreznoz',
        'email@email.uk',
        'secretpass',
        '2024-12-02 12:54:06.090 +00:00',
        '2024-12-02 12:54:06.090 +00:00'
    ),
    (
        DEFAULT,
        'loreznoz',
        'loreznoz',
        'email@email.ga',
        'secretpass',
        '2024-12-02 12:54:06.090 +00:00',
        '2024-12-02 12:54:06.090 +00:00'
    ),
    (
        DEFAULT,
        'loreznoz',
        'loreznoz',
        'email@email.dev',
        'secretpass',
        '2024-12-02 12:54:06.090 +00:00',
        '2024-12-02 12:54:06.090 +00:00'
    ) RETURNING "id",
    "firstname",
    "lastname",
    "email",
    "password",
    "created_at",
    "updated_at";

SELECT
    "Quiz"."id",
    "Quiz"."title",
    "Quiz"."description",
    "Quiz"."user_id",
    "Quiz"."created_at",
    "Quiz"."updated_at",
    "author"."id" AS "author.id",
    "author"."firstname" AS "author.firstname",
    "author"."lastname" AS "author.lastname",
    "author"."email" AS "author.email",
    "author"."password" AS "author.password",
    "author"."created_at" AS "author.created_at",
    "author"."updated_at" AS "author.updated_at",
    "tags"."id" AS "tags.id",
    "tags"."name" AS "tags.name",
    "tags"."created_at" AS "tags.created_at",
    "tags"."updated_at" AS "tags.updated_at",
    "tags->QuizHasTag"."quiz_id" AS "tags.QuizHasTag.quiz_id",
    "tags->QuizHasTag"."tag_id" AS "tags.QuizHasTag.tag_id",
    "tags->QuizHasTag"."created_at" AS "tags.QuizHasTag.created_at",
    "tags->QuizHasTag"."updated_at" AS "tags.QuizHasTag.updated_at",
    "questions"."id" AS "questions.id",
    "questions"."description" AS "questions.description",
    "questions"."anecdote" AS "questions.anecdote",
    "questions"."wiki" AS "questions.wiki",
    "questions"."quiz_id" AS "questions.quiz_id",
    "questions"."level_id" AS "questions.level_id",
    "questions"."created_at" AS "questions.created_at",
    "questions"."updated_at" AS "questions.updated_at",
    "questions->proposals"."id" AS "questions.proposals.id",
    "questions->proposals"."description" AS "questions.proposals.description",
    "questions->proposals"."question_id" AS "questions.proposals.question_id",
    "questions->proposals"."is_valid" AS "questions.proposals.is_valid",
    "questions->proposals"."created_at" AS "questions.proposals.created_at",
    "questions->proposals"."updated_at" AS "questions.proposals.updated_at",
    "questions->level"."id" AS "questions.level.id",
    "questions->level"."name" AS "questions.level.name",
    "questions->level"."created_at" AS "questions.level.created_at",
    "questions->level"."updated_at" AS "questions.level.updated_at"
FROM
    "quiz" AS "Quiz"
    LEFT OUTER JOIN "user" AS "author" ON "Quiz"."user_id" = "author"."id"
    LEFT OUTER JOIN (
        "quiz_has_tag" AS "tags->QuizHasTag"
        INNER JOIN "tag" AS "tags" ON "tags"."id" = "tags->QuizHasTag"."tag_id"
    ) ON "Quiz"."id" = "tags->QuizHasTag"."quiz_id"
    LEFT OUTER JOIN "question" AS "questions" ON "Quiz"."id" = "questions"."quiz_id"
    LEFT OUTER JOIN "answer" AS "questions->proposals" ON "questions"."id" = "questions->proposals"."question_id"
    LEFT OUTER JOIN "level" AS "questions->level" ON "questions"."level_id" = "questions->level"."id"
WHERE
    "Quiz"."id" = '2';