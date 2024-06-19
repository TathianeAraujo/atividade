const express = require('express');
const { sequelize } = require('./models');
const dotenv = require('dotenv');
dotenv.config();

const arquivoRoutes = require('./routes/routes');
const pastaRoutes = require('./routes/routes');
const usuarioRoutes = require('./routes/routes');

const app = express();

app.use(express.json());

app.use('/api', arquivoRoutes);
app.use('/api', pastaRoutes);
app.use('/api', usuarioRoutes);

const PORT = process.env.PORT;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('Erro ao conectar ao banco de dados:', err);
});
