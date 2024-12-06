function redirectIfAuthenticated(req, res, next) {
    if (req.session?.user) {
        //
        return res.redirect('/');
    }

    return next();
}

export { redirectIfAuthenticated };
