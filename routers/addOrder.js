const express = require("express");
const router = new express.Router();
const Order = require("../models/Order");
const  authenticateToken = require("../middleware/checkAuth");

router.post('/add-order', authenticateToken , (req,res)=>{
    const  {  sub_total, phone_number } = req.body;
    
      Order.insertMany([
        {subTotal: sub_total,userId: req.user.userId, phoneNumber: phone_number},
      ])
        .then(data => {
          res.status(200).json(data);
        })
        .catch(err => {
          res.status(500).json({ message: err });
        });
});

module.exports = router;