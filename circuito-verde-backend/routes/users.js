const express = require('express');
const router = express.Router();

const db = require('../database/db');


// CADASTRO
router.post('/register', (req, res) => {

  const { nome, email, senha } = req.body;

  db.run(
    'INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)',
    [nome, email, senha],

    function(err) {

      if (err) {
        return res.status(500).send(err);
      }

      res.send({
        mensagem: 'Usuário cadastrado!',
        id: this.lastID
      });

    }
  );

});


// LOGIN
router.post('/login', (req, res) => {

  const { email, senha } = req.body;

  db.get(
    'SELECT * FROM users WHERE email = ? AND senha = ?',
    [email, senha],

    (err, user) => {

      if (err) {
        return res.status(500).send(err);
      }

      if (!user) {
        return res.status(401).send({
          mensagem: 'Usuário inválido'
        });
      }

      res.send({
        mensagem: 'Login realizado!',
        user
      });

    }
  );

});

router.get('/teste', (req, res) => {
  res.send('Rota users funcionando!');
});

// ATUALIZAR USUÁRIO
router.put('/update/:id', (req, res) => {

  const id = req.params.id;

  const { nome, email, senha } = req.body;

  db.run(
    `
    UPDATE users
    SET nome = ?, email = ?, senha = ?
    WHERE id = ?
    `,
    [nome, email, senha, id],

    function(err) {

      if (err) {
        return res.status(500).send(err);
      }

      res.send({
        mensagem: 'Usuário atualizado!'
      });

    }
  );

});

// DELETAR USUÁRIO
router.delete('/delete/:id', (req, res) => {

  const id = req.params.id;

  db.run(
    'DELETE FROM users WHERE id = ?',
    [id],

    function(err) {

      if (err) {
        return res.status(500).send(err);
      }

      res.send({
        mensagem: 'Usuário deletado!'
      });

    }
  );

});

module.exports = router;