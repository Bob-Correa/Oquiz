function isAdmin(req, res, next) {
    if (req.session?.user.role === 'admin') {
        // le middleware suivant : la route est ouverte
        return next();
    }

    const error = new Error('forbidden !');
    error.statusCode = 403;

    next(error);
}

export { isAdmin };
