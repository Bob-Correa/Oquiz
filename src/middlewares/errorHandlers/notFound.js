function notFound(req, res, next) {
    const err = new Error("La ressource demandée n'existe pas");
    err.statusCode = 404;

    // déclenche le middleware suivant
    next(err);
}

export { notFound };
