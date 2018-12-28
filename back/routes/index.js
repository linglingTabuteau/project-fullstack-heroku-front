const { Router } = require('express');

const router = Router();

const connection = require('./conf');

/* GET index page. */

// écoute de l'url "/api/employees"
router.get('/films', (req, res) => {
  // connection à la base de données, et sélection des employés
  connection.query('SELECT * from ghibli_film', (err, results) => {
    if (err) {
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      res.status(500).send('Erreur lors de la récupération des films');
    } else {
      // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
      res.json(results);
    }
  });
});

module.exports = router;
