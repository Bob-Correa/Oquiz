function initUserSession(req, res, next) {
    let user = null;
    // si on a une session avec un user : on assigne le user de la session à notre variable
    if (req.session?.user) {
        user = req.session.user;
    }

    // dans tous les cas on partage la variable avec les locals : soit user est null, soit il y en a un et on peut afficher conditionnellement des ressources
    res.locals.user = user;

    next();
}

export { initUserSession };
