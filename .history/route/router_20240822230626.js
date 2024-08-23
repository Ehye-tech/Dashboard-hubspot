const express = require('express');

function routes({ app }: { app: express.Express }) {
    app.get('/healthcheck', (req, res) => res.sendStatus(200));
}

export default routes;