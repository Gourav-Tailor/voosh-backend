const express = require("express");
const router = new express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
require('dotenv').config();

router.post('/login-user', (req,res)=>{
    const  { phone_number, password, login_by } = req.body;
    
    bcrypt.genSalt(10, (err, Salt) => {
        bcrypt.hash(password, Salt, (err, hash) => {
            if (err) {
                res.status(500).json({ message: err });
            }
            User.findOne({phoneNumber: phone_number,password: hash})
                .then(data => {
                        if(data){
                            const token = jwt.sign({ userId: data.userId }, process.env.SECRET_KEY, { expiresIn: '1h' });
                            res.set('authorization', token);
                            res.status(200).json({token});
                        }
                        else {
                            res.status(500).json({ message: "Invaild Credentials" });
                        }
                })
                .catch(err => {
                    res.status(500).json({ message: err });
                });
            });
    });
});

module.exports = router;