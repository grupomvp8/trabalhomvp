const express = require('express');
const cors = require('cors');

require('./database/db');

const userRoutes = require('./routes/users');

const locaisRoutes = require('./routes/locais');

const favoritosRoutes = require('./routes/favoritos');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);

app.use('/locais', locaisRoutes);

app.use('/favoritos', favoritosRoutes);

app.get('/', (req, res) => {
  res.send('Servidor do Circuito Verde Terê funcionando!');
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});