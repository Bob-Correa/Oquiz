import passwordValidator from 'password-validator';
import { validateEmail } from '../helpers/validateEmail.js';
import { User } from '../models/index.js';
import { Scrypt } from '../helpers/Scrypt.js';
//  on a importé bcrypt juste pour tester la méthode compare
import bcrypt from 'bcrypt';

const sessionController = {
    async showLoginForm(req, res) {
        res.render('login');
    },

    async login(req, res) {
        // Pa$$w0rd! : mot de passe scrypt
        // quizoclock : mot de passe bcrypt
        // * créer le monde / le contexte
        const { email, password } = req.body;
        const errors = [];
        // validation password
        const schema = new passwordValidator();
        schema
            .is()
            .min(8) // Minimum length 8
            .has()
            .uppercase() // Must have uppercase letters
            .has()
            .lowercase() // Must have lowercase letters
            .has()
            .digits(1) // Must have at least 2 digits
            .has()
            .not()
            .spaces() // Should not have spaces
            .is()
            .not()
            .oneOf(['Passw0rd', 'Password123']);

        // * notre calcul
        // validation email
        if (!validateEmail(email)) {
            errors.push("le format de l'email est invalide");
        }

        // Validate against a password string
        if (!schema.validate(password)) {
            errors.push('email ou mot de passe incorrect');
        }

        // si valide : on chercher user et on valide mot de passe
        const user = await User.findOne({
            // destructuring en action {email: email} === { email }
            where: { email },
        });

        if (!user) {
            errors.push('email ou mot de passe incorrect');
        }

        // comparaison du mot de passe en clair avec celui qui est hashé en BDD
        let ok = false;
        if (user) {
            ok = Scrypt.compare(password, user.password);
        }

        // const isOk = await bcrypt.compare(password, user.password);
        // console.log(isOk);

        if (!ok) {
            errors.push('email ou mot de passe incorrect');
        }

        if (errors.length) {
            return res.render('login', { errors });
        }

        // si mot de passe valide : démarrer session
        // envoie du résultat
        // démarrer la session
        // effacer le mot de passe de l'objet user
        delete user.dataValues.password;

        // * après cette ligne : le user est connecté
        req.session.user = user.dataValues;

        return res.redirect('/');
    },
};

export { sessionController };
