const express = require("express");
const router = new express.Router();
const User = require("../models/User");

router.post('/add-user', (req,res)=>{
    const  {  name, phone_number, password } = req.body;

    User.insertMany([
        {
            name: name, 
            phoneNumber: phone_number, 
            password: password
        },
      ])
        .then(data => {
          res.json(data);
        })
        .catch(err => {
          res.json({ message: err });
        });

});

module.exports = router;