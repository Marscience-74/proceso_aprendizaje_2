const notFound = (req, res, next) => {
    res.status(404).json({
        error: true,
        message: `La ruta no existe`
    });
};

module.exports = notFound;