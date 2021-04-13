const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
    res.render('index')
})
routes.get('/dentistas', (req, res) => {
    res.render('dentistas')
})
routes.get('/consulta', (req, res) => {
    res.render('consulta')
})
routes.get('/sobre', (req, res) => {
    res.render('sobre')
})
routes.get('/login', (req, res) => {
    res.render('login')
})
module.exports = routes