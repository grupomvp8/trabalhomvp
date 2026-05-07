const express = require('express');
const router = express.Router();

const db = require('../database/db');


// ADICIONAR FAVORITO
router.post('/add', (req, res) => {

  const { user_id, local_id } = req.body;

  db.run(
    'INSERT INTO favoritos (user_id, local_id) VALUES (?, ?)',
    [user_id, local_id],

    function(err) {

      if (err) {
        return res.status(500).send(err);
      }

      res.send({
        mensagem: 'Favorito adicionado!',
        id: this.lastID
      });

    }
  );

});


// LISTAR FAVORITOS
router.get('/:user_id', (req, res) => {

  const user_id = req.params.user_id;

  db.all(
    `
    SELECT favoritos.id, locais.nome, locais.descricao, locais.categoria
    FROM favoritos
    JOIN locais ON favoritos.local_id = locais.id
    WHERE favoritos.user_id = ?
    `,
    [user_id],

    (err, rows) => {

      if (err) {
        return res.status(500).send(err);
      }

      res.send(rows);

    }
  );

});


module.exports = router;