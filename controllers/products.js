const mongoose = require('mongoose');

const Product = require('../models/product');

const getAllProducts = (req, res, next) => {
    Product.find().exec().then(docs => {
        console.log(docs);
        res.status(200).json(docs);
    }).catch(err => {
        console.log(err);
        res.status(500).json({error:err});
    });
}

const createProduct = (req, res, next) => {
    const product = new Product({
        _id:new mongoose.Types.ObjectId(),
        name:req.body.name,
        price:req.body.price
    });

    product.save().then(result => {
        console.log(result);
    }).catch(err => console.log(err));

    res.status(200).json({
        message:'Handling POST requests to /products',
        createdProduct:product
    });
}

const getProductById = (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id).exec().then(doc => {
        console.log(doc);
        res.status(200).json(doc);
    }).catch(err => {
        console.log(err);
        res.status(500).json({error:err});
    });
}

const updateProductById = (req, res, next) => {
    const id = req.params.productId;
    const updateOps = {};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }

    Product.updateOne({_id:id}, {$set:updateOps}).exec().then(result => {
        console.log(result);
        res.status(200).json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).json({error:err});
    });
}

const deleteProductById = (req, res, next) => {
    const id = req.params.productId;
    Product.deleteOne({_id:id}).exec().then(result => {
        res.status(200).json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).json({error:err});
    });
}

module.exports = {getAllProducts, createProduct, getProductById, updateProductById, deleteProductById};