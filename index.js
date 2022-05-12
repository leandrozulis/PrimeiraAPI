const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./config/routes')

// Inicia o servidor
const app = express();

// Adicionando propriedades e bibliotecas dentro da API
app.use(morgan('dev')); // log de execução
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json()); // tipo de dados que queremos receber
app.use(cors()); // Rota de domínio
app.use(routes);

// Ligando o app
app.listen(21262, () => {
    console.log(`Express started at http://localhost:21262`);
})