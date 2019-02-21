const { Router } = require('express');

const router = Router();

const connection = require('./conf');

/* GET index page. */

// get /films
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

// post /films 
router.post('/films', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO ghibli_film SET ?', formData, (err) => {
    if (err) {
      res.status(500).send('Erreur lors de rejouter un film');
    } else {
      res.status(200).send('ok');
    }
  });
});

// search bar
router.get('/results', (req, res) => {
  console.log('req.query', req.query);
  const keyword = `%${req.query.keyword}%`;
  connection.query('SELECT name FROM ghibli_film WHERE name LIKE ?', keyword, (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results);
      console.log('Back-results of search', results);
    }
  });
});

module.exports = router;
