const express = require("express");
const router = new express.Router();
const User = require("../models/User");
const bcrypt = require('bcryptjs');

router.post('/add-user', (req,res)=>{
    const  {  name, phone_number, password } = req.body;

    bcrypt.genSalt(10, (err, Salt) => {
      bcrypt.hash(password, Salt, (err, hash) => {
          if (err) {
              res.status(500).json({ message: err });
          }
        User.insertMany([
            {   
                userId: (Date.now()),
                name: name, 
                phoneNumber: phone_number, 
                password: hash
            },
          ])
            .then(data => {
              res.status(200).json(data);
            })
            .catch(err => {
              res.status(500).json({ message: err });
          });
      });
    });

});

module.exports = router;