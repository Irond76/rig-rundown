const notFoundMiddleware = (req, res) => {
    res.status(404).send(`<h1>404 Error: Page Not Found`);
};

module.exports = notFoundMiddleware;