const homeController = {
    //
    async homePage(req, res) {
        try {
            res.render('home');
        } catch (error) {
            console.log(error);

            // * - le message d'erreur est le suivant :
            // ? Validation error: Le mot de passe doit contenir au moins 8 caractères
            // avec split on coupe la string en se basant sur le : et split crée un tableau avec deux éléments : ['Validation error:', 'Le mot de passe doit contenir au moins 8 caractères']
            // const errorMessageArray = error.message.split(':');

            // const message = errorMessageArray[1];

            // console.log(error.errors[0].message);
            //  ! temporaire: les détails après l'atelier PP
            res.render('home');
        }
    },
};

export { homeController };
