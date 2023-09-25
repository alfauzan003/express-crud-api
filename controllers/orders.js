const mongoose = require('mongoose');

const Order = require('../models/order');


const getAllOrders = (req, res, next) => {
        Order.find().exec().then(docs => {
            console.log(docs);
            res.status(200).json(docs);
        }).catch(err => {
            console.log(err);
            res.status(500).json({error:err});
        });
    }

const getOrderById = (req, res, next) => {
    Order.findById(req.params.orderId).exec().then(order => {
        if(!order){
            return res.status(404).json({
                message:'Order not found'
            });
        }
        res.status(200).json(order);
    }).catch(err => {
        res.status(500).json({
            error:err
        });
    });
}

const createOrder = (req, res, next) => {
    const order = new Order({
        _id:new mongoose.Types.ObjectId(),
        quantity:req.body.quantity,
        product:req.body.productId
    });
    order.save().then(result => {
        console.log(result);
        res.status(201).json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).json({error:err});
    });
}

const deleteOrderById = (req, res, next) => {
    Order.deleteOne({_id:req.params.orderId}).exec().then(result => {
        res.status(200).json(result);
    }).catch(err => {
        res.status(500).json({
            error:err
        });
    });
}

module.exports = {getAllOrders, getOrderById, createOrder, deleteOrderById};