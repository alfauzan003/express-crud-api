const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require('dotenv').config();
const secretKey = process.env.SECRET_KEY;

const User = require('../models/user');

const login = (req, res, next) => {
    User.findOne({email:req.body.email}).exec().then(user => {
        if(user.length < 1){
            return res.status(401).json({
                message:'User not found'
            });
        }
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if(err){
                return res.status(401).json({
                    message:'Auth failed'
                });
            }
            if(result){
                const token = jwt.sign(
                    {
                        email:user.email,
                        userId:user._id
                    },
                    secretKey,
                    {
                        expiresIn:"1h"
                    },
                );
                return res.status(200).json({
                    message:'Auth successful',
                    token:token
                });
            }
            res.status(401).json({
                message:'Auth failed'
            });
        });
    }).catch(err => {
        res.status(500).json({
            error:err
        });
    }
    );
}

const signup = (req, res, next) => {
    User.find({email:req.body.email}).exec().then(user => {
        if (user.length >= 1) {
            return res.status(409).json({
                message: 'Email exists'
            });
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    return res.status(500).json({
                        error: err
                    });
                } else {
                    const user = new User({
                        _id: new mongoose.Types.ObjectId(),
                        email: req.body.email,
                        password: hash
                    });
                    user.save().then(result => {
                        console.log(result);
                        res.status(201).json({
                            message: 'User created'
                        });
                    }).catch(err => {
                        console.log(err);
                        res.status(500).json({
                            error: err
                        });
                    });
                }
            })
        }
    })
}

const deleteUserById = (req, res, next) => {
    User.deleteOne({_id:req.params.userId}).exec().then(result => {
        res.status(200).json(result);
    }).catch(err => {
        res.status(500).json({
            error:err
        });
    });
}

module.exports = {login, signup, deleteUserById};