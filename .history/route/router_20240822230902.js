const express = require('express');

function routes({ app }: { app: express.Express }) {
    app.get('/healthcheck', (req, res) => res.sendStatus(200));

    // Add other routes here
    app.get('/contacts', (req, res) => {
        // Fetch contacts data from your database or other source
        const contacts = getAllContacts();
        res.json(contacts);
    });
}

export default routes;