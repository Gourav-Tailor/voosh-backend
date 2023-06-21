const express = require("express");
const router = new express.Router();
const Order = require("../models/Order");
const  authenticateToken = require("../middleware/checkAuth");

router.post('/add-order', authenticateToken , (req,res)=>{
    const  {  user_id, sub_total, phone_number } = req.body;
    
      Order.insertMany([
        {subTotal: sub_total,userId: user_id, phoneNumber: phone_number},
      ])
        .then(data => {
          res.json(data);
        })
        .catch(err => {
          res.json({ message: err });
        });
});

module.exports = router;