const express = require("express");
const productsRouter = require('./routes/productsRoutes.js');
const app = express();
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://nitishkumar0914:qsFFEKKSwsUrfb9h@cluster0.keg6t2n.mongodb.net/kietPathshala')

app.use(express.json());
app.use('/api/products', productsRouter)

app.listen(3000,()=>{
    console.log("server started at port 3000")
})

module.exports = app;
