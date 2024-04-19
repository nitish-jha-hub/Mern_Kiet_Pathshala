const productModel = require('../models/productsModel.js');

const getAllProducts = async (req, res) => {
    // q=req.query
    const {sort= 'price',page=1,pageSize = 3,fields= 'title', ...q} =req.query
    // console.log(sort,q)
    // let products = await productModel.find(q);
    // let query = productModel.find().find(q).filter(()=>{});    //we can alse use chaining
    let query = productModel.find();
    // query = productModel.find();
    // query = query.sort('price')   //incresing order
    // query = query.sort('-price')  //decreasin order add - in prefix

    // paination
    const skip = pageSize*(page-1);
    const limit = 3;
    const fieldSTR = fields.split(",").join(" ")
    query = query.skip(skip).limit(limit).select(fieldSTR)

    query = query.sort(sort)
    const products = await query;
    const totalResults = await productModel.countDocuments();

    console.log(req.url);
    res.json({
        status: 'success',
        results: products.length,
        pageSize: pageSize,
        page: page,
        totalResults: totalResults,
        data:{
            products,
        }
    })
}

const addProduct = async (req, res)=>{
    try{
        const {_id, createdAt, updatedAt, ...reqData} = req.body;
        const products = await productModel.create(reqData);
        res.json({
            status: 'success',
            results: 1,
            data: {
                products,
            }
        });
    }
    catch(err){
        res.status(403);
        console.log(err)
        res.json({
            status: 'fail',
            message: JSON.stringify(err),
        });
    }
}

const replaceProduct = async (req, res)=>{
    try{
        const reqId = req.params.id;
        const {_id, createdAt, updatedAt, ...data} = req.body;
        const products = await productModel.findOneAndReplace({_id: reqId}, data);
        if(!products){
            res.status(400);
            res.json({
                status: 'fail',
                message: 'Id does not exist',
            })
            return ;
        }
        res.json({
            status: 'success',
            results: 1,
            data:{
                products,
            }
        });
    }
    catch(err){
        res.status(500);
        res.json({
            status: 'fail',
            message: JSON.stringify(err),
        })
    }
}

const updateProduct = async (req, res)=>{
    try{
        const reqId = req.params.id;
        const {_id, createdAt, updatedAt, ...data} = req.body;
        const products = await productModel.findOneAndUpdate({_id: reqId}, data);
        if(!products){
            res.status(400);
            res.json({
                status: 'fail',
                message: 'Id does not exist',
            })
            return ;
        }
        res.json({
            status: 'success',
            results: 1,
            data:{
                products,
            }
        });
    }
    catch(err){
        res.status(500);
        res.json({
            status: 'fail',
            message: JSON.stringify(err),
        })
    }
}

const deleteProduct = async (req, res)=>{
    try{
        const reqId = req.params.id;
        const products = await productModel.findOneAndDelete({_id: reqId});
        if(!products){
            res.status(400);
            res.json({
                status: 'fail',
                message: 'Id does not exist',
            })
            return ;
        }
        res.status(204);
        res.json({
            status: 'success',
            results: 1,
            data:{
                products: products,
            }
        });
    }
    catch(err){
        res.status(500);
        res.json({
            status: 'fail',
            message: JSON.stringify(err),
        })
    }
}

module.exports = {
    getAllProducts,
    addProduct,
    replaceProduct,
    updateProduct,
    deleteProduct
}