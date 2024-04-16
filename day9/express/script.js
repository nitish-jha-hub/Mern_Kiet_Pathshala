const express = require('express');
// const fs = require('fs');   #sync
const fsPromises = require('fs/promises')  // #async
const app = express();
const port = 1400;

app.use(express.json()); //for parsing application/json body //in express latest maybe after 16 body parser is interated

app.get('/', (req, res) => {
    console.log(Object.keys(req));
    // console.log(req);
    res.send('Hello World, This is / Page')
})

app.get('/api/products', async (req, res) => {
    // console.log(req);
    // const data = fs.readFileSync("./data.json", "utf8");   //sync
    const data = await fsPromises.readFile("./data.json", "utf8");
    const dataObj = JSON.parse(data).products;
    res.send({
        status: "Success",
        result: dataObj.length,
        data: {
            products: dataObj
        }
    })
})

// data save to db.json file
app.post('/api/products', async (req, res) => {
    if(!req.body.title || !req.body.Price) {
        return res.status(400).send({
            status: "Error",
            message: "Please provide name and price"
        })
    }
    console.log(req.body);
    const data = req.body;
    // data.id = data.products.length + 1;
    const db = await fsPromises.readFile("./data1.json", "utf8");
    const len = JSON.parse(db).length;
    data.id = len + 1;
    const newProduct = JSON.parse(db);
    newProduct.push(data);
    await fsPromises.writeFile("./data1.json", JSON.stringify(newProduct));
    res.send({
        status: "Success",
        data: {
            product: data
        }
    })
})

// edit data
app.put('/api/products/:id', async (req, res) => {   //:id is a dynamic parameter
    console.log(req.body);
    console.log(req.params);
    const data = req.body;
    const id = req.params.id;
    const arr = JSON.parse(await fsPromises.readFile("./data1.json", "utf8"));
    const newArr = arr.map((el) => {
        if (el.id == id) {
            return data;
        }
        return el;
    })
    await fsPromises.writeFile("./data1.json", JSON.stringify(newArr));
    // res.send('Data Updated Successfully');
    res.json({
        status: "Success",
        data: {
            product: data
        }
    })
})


app.delete('/api/products/:id', async(req, res) => {
    const db = await fsPromises.readFile("./data1.json", "utf8");
    const arr = JSON.parse(db);
    // const newArr = arr.splice(req.params.id - 1, 1);
    const newArr = arr.filter((el) => el.id != req.params.id);
    await fsPromises.writeFile("./data1.json", JSON.stringify(newArr));
    // res.status(204).json({
    //     status: "Success",
    //     data: null
    // })
    res.send({status: "Hello World, data is  DELETED",
            data : {
                product: null
            }
            })
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})