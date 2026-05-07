const express = require('express');
const router = express.Router();

const db = require('../database/db');


// LISTAR LOCAIS
router.get('/', (req, res) => {

  db.all('SELECT * FROM locais', [], (err, rows) => {

    if (err) {
      return res.status(500).send(err);
    }

    res.send(rows);

  });

});


// ADICIONAR LOCAL
router.post('/add', (req, res) => {

  const { nome, descricao, categoria } = req.body;

  db.run(
    'INSERT INTO locais (nome, descricao, categoria) VALUES (?, ?, ?)',
    [nome, descricao, categoria],

    function(err) {

      if (err) {
        return res.status(500).send(err);
      }

      res.send({
        mensagem: 'Local adicionado!',
        id: this.lastID
      });

    }
  );

});


module.exports = router;