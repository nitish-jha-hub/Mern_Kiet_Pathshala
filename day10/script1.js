const express = require('express');
const productRouter = require('./router/productRoutes.js');

const app = express();

app.use(express.json());

app.use('/api/products', productRouter);

app.listen(1400, () => {
    console.log('Server is listening on port 1400');
})