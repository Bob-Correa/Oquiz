function isAuth(req, res, next) {
    if (req.session?.user) {
        // le middleware suivant : la route est ouverte
        return next();
    }

    return res.redirect('/');
}

export { isAuth };
