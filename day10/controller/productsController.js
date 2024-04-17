const fsPromises = require("fs").promises;

const getAllProducts = async (req, res) => {
    const db = await fsPromises.readFile("./data1.json", "utf8");
    res.status(200)
    res.send({
        status: "Success",
        result: JSON.parse(db).length,
        data: {
            products: JSON.parse(db)
        }
    })
}

const AddProduct = async (req, res) => {
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
}

const replaceProduct = async (req, res) => {   //:id is a dynamic parameter
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
}

const deleteProduct = async(req, res) => {
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
}

module.exports = { getAllProducts, AddProduct, replaceProduct, deleteProduct}