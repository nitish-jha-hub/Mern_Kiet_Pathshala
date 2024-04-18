const express = require('express');
const mongoose = require('mongoose');
const Product = require('../models/productsModel.js')

const dbusername = 'nitishkumar0914'
const dbpassword = 'qsFFEKKSwsUrfb9h'
const dbname = 'kietPathshala'
const dburl = `mongodb+srv://${dbusername}:${dbpassword}@cluster0.keg6t2n.mongodb.net/${dbname}`

const getProductById = async (req, res) => {
  try {
    mongoose.connect(dburl)
    const reqId = req.params.id;
    const data = await Product.findOne({ _id: reqId })
    // console.log(data, typeof (data))
    res.send({
      status: 'success',
      result: 0,
      data: {
        products: [data]
      }
    })
  }
  catch (err) {
    res.status(400).json({ "status": "failed", message: err.message })
  }
}

const getAllProducts = async (req, res) => {
  mongoose.connect(dburl)
  const data = await Product.find()
  console.log(data, typeof (data))
  res.send({
    status: 'success',
    result: 0,
    data: {
      products: [data]
    }
  })
}

const addProduct = async (req, res) => {
  try {
    mongoose.connect(dburl)
    // 1st method
    const data = await Product.create(req.body)

    // 2nd method
    // const newProduct = new Product({
    //   title: req.body.title,
    //   price: req.body.price,
    // })
    // await newProduct.save().then(() => console.log('data saved in database'));

    res.status(201).send({
      status: 'success',
      result: 0,
      data: {
        product: [req.body]
      }
    })
  } catch (error) {
    res.status(500).send({
      status: 'error',
      result: 0,
      message: error.message
    })
  }
}

const replaceProduct = async (req, res) => {
  try {
    mongoose.connect(dburl)
    const reqId = req.params.id;
    const query = req.query
    console.log(reqId, query)
    const data = { ...req.body, reqId }
    const result = await Product.findOneAndUpdate({ _id: query.id }, data)
    res.send({
      status: 'success',
      result: 0,
      data: {
        product: [req.body]
      }
    })
  }
  catch (error) {
    res.status(500).send({
      status: 'error',
      result: 0,
      message: error.message
    })
  }
}

const deleteProduct = async (req, res) => {
  try {
    mongoose.connect(dburl)
    const reqId = req.params.id;
    // const query = req.query
    // console.log(reqId, query)
    const result = await Product.findOneAndDelete({ _id: reqId })
    console.log(result)
    res.send({
      status: 'success',
      result: 0,
      data: {
        product: [reqId]
      }
    })
  }
  catch (error) {
    res.status(500).send({
      status: 'error',
      result: 0,
      message: error.message
    })
  }

}

module.exports = { getAllProducts, addProduct, replaceProduct, deleteProduct, getProductById }