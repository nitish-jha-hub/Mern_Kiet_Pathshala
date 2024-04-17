const express = require('express');
// const fs = require('fs');   #sync
const fsPromises = require('fs/promises')  // #async
const app = express();
const port = 1400;

// import 
const { getAllProducts, AddProduct, replaceProduct, deleteProduct } = require('./controller/productsController.js');
const userController = require('./controller/userController.js');

app.use(express.json()); //for parsing application/json body //in express latest maybe after 16 body parser is interated

// middleware function to log request protocol //add next() to move to next middleware
app.use((req, res, next) => {
    const date = new Date().toLocaleString();
    fsPromises.appendFile("log.txt", req.url +"\t" + date+ "\n");
    console.log('Hello from the middleware');
    next();
})

const produtRouter = express.Router();
const userRouter = express.Router();

app.use('/api/products', produtRouter);
app.use('/api/users', userRouter);

// SubRouting
produtRouter.route('/')
    .get(getAllProducts);

app.get('/', (req, res) => {
    console.log(Object.keys(req));
    // console.log(req);
    res.send('Hello World, This is / Page')
})

// product controller
// app.get('/api/products', getAllProducts);

// app.post('/api/products', AddProduct);

// app.put('/api/products/:id', replaceProduct);

// app.delete('/api/products/:id', deleteProduct);

// app.get('/api/products', async (req, res) => {
//     // console.log(req);
//     // const data = fs.readFileSync("./data.json", "utf8");   //sync
//     const data = await fsPromises.readFile("./data1.json", "utf8");
//     const dataObj = JSON.parse(data).products;
//     res.send({
//         status: "Success",
//         result: dataObj.length,
//         data: {
//             products: dataObj
//         }
//     })
// })

// data save to db.json file


// edit data

app.all('/api/users', userController.addUser);

// app.route('/api/users')
//     .get(userController.getAllUsers)
//     .post(userController.addUser)


// app.route('/api/users/:id')
//     .get(userController.getUser)
//     .put(userController.updateUser)
//     .delete(userController.deleteUser);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})