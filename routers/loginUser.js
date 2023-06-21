const express = require("express");
const router = new express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
require('dotenv').config();

router.post('/login-user', (req,res)=>{
    const  { phone_number, password, login_by } = req.body;
    
        User.findOne({phoneNumber: phone_number})
            .then(data => {
                    if(data){
                        bcrypt.compare(password, data.password,
                            function (err, isMatch) {
                                if(isMatch){
                                    const token = jwt.sign({ userId: data.userId }, process.env.SECRET_KEY, { expiresIn: '1h' });
                                    res.set('authorization', token);
                                    res.status(200).json({token});
                                }
                                else{
                                    res.status(500).json({ message: err });
                                }
                                
                            });
                    }
                    else {
                        res.status(500).json({ message: "Invaild Credentials" });
                    }
            })
            .catch(err => {
                res.status(500).json({ message: err });
        });
});

module.exports = router;