import bcrypt from 'bcrypt';
import { Scrypt } from '../helpers/Scrypt.js';
import { User } from '../models/index.js';
import { validateEmail } from '../helpers/validateEmail.js';

const registerController = {
    passwordMinLenth: 8,

    async showRegisterForm(req, res) {
        //
        res.render('register');
    },

    async register(req, res) {
        // Pa$$w0rd!
        // * - [ ] valider chaque champ du formulaire (les champs obligatoires doivent être remplis)
        let { firstname, lastname, email, password, confirmation } = req.body;
        const errors = [];

        if (!firstname) {
            errors.push('Le champ firstname est obligatoire');
        }

        if (!lastname) {
            errors.push('Le champ lastname est obligatoire');
        }

        if (!email) {
            errors.push('Le champ email est obligatoire');
        }

        // * - [x] valider le format de l'email
        if (!validateEmail(email)) {
            errors.push("Le format de l'email est invalide");
        }

        // ! vérifier si user existe
        const user = await User.findOne({
            where: { email: email },
        });

        if (user) {
            errors.push("L'email est invalide");
        }

        if (!password || !confirmation) {
            errors.push('Les champs mot de passe sont obligatoires');
        }

        // ici here lies the connerie du siècle
        if (password !== confirmation) {
            errors.push('Les mot de passe ne sont pas identiques');
        }

        // - [x] valider la longueur du mot de passe
        if (password.length < registerController.passwordMinLenth) {
            errors.push('Le mot de passe doit contenir 8 caractères minimum');
        }

        //  si on a rencontré des erreurs : on les envoie à la vue
        // todo : afficher les erreurs
        if (errors.length) {
            return res.status(400).render('register', { errors });
        }

        // - [x] hasher le mot de passe
        const salt = await bcrypt.genSalt(12);
        const hashbcrypt = await bcrypt.hash(password, salt);
        // console.log(hashbcrypt);
        const hash = Scrypt.hash(password);
        // console.log(hash);

        // - [x] créer le user en BDD
        await User.create({
            firstname,
            lastname,
            email,
            password: hash,
        });

        res.render('register');
        // res.redirect('/login');
    },
};

export { registerController };
