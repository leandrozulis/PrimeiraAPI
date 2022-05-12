/*
    GET -> Retorna um valor
    POST -> Adiciona um valor
    PUT -> Altera um valor
    DELETE -> Deleta um valor
*/

const express = require('express');
const routes = express.Router();

let db = [
    { '1': { Nome: 'Cliente 1', Idade: '20'} },
    { '2': { Nome: 'Cliente 2', Idade: '20'} },
    { '3': { Nome: 'Cliente 3', Idade: '20'} }
]

// Request e response

// Buscar Dados
routes.get('/', (req, res) => {
    return res.json(db); // Retornando os dados do DB em formato de JSON
})

// Inserir Dados
routes.post('/add', (req, res) => {
    const body = req.body

    if(!body) return res.status(400).end();

    db.push(body)
    return res.json(body)
})

// Deletar dados
routes.delete('/:id', (req,res) => {
    const id = req.params.id

    let newDB = db.filter(item => {
        if(!item[id]) return item;
    })

    db = newDB;

    return res.send(newDB);
})

module.exports = routes;