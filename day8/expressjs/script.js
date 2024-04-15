const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World, This is / Page')
})

app.get('/products', (req, res) => {
    res.send('Hello World, This is Home Page GET')
})
app.post('/products', (req, res) => {
    res.send('Hello World, This is Home Page POST')
})
app.put('/products', (req, res) => {
    res.send('Hello World, This is Home Page PUT')
})
app.delete('/products', (req, res) => {
    res.send('Hello World, This is Home Page DELETE')
})

app.listen(1400)