const express = require("express");
const router = new express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
require('dotenv').config();

router.post('/login-user', (req,res)=>{
    const  { phone_number, password, login_by } = req.body;

    User.findOne({phoneNumber: phone_number,password: password})
        .then(data => {
                if(data){
                    const token = jwt.sign({ userId: data.userId }, process.env.SECRET_KEY, { expiresIn: '1h' });
                    res.set('authorization', token);
                    res.json({token});
                }
                else {
                    res.json({ message: "Invaild Credentials" });
                }
        })
        .catch(err => {
            res.json({ message: err });
        });
});

module.exports = router;