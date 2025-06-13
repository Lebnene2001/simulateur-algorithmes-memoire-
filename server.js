const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.static(__dirname)); // Sert index.html, script.js, etc.

// Route POST /save
app.post('/save', (req, res) => {
    const data = req.body.content;
    fs.appendFile('if3602.txt', data, (err) => {
        if (err) {
            console.error('Erreur lors de la sauvegarde :', err);
            return res.status(500).send('Erreur lors de la sauvegarde');
        }
        res.send('Données sauvegardées avec succès');
    });
});

// Démarrage du serveur
app.listen(port, () => {
    console.log(`✅ Serveur démarré sur : http://localhost:${port}`);
});
