const express = require("express");
const router = new express.Router();
const Order = require("../models/Order");
const  authenticateToken = require("../middleware/checkAuth");

router.get('/get-order', authenticateToken , (req,res)=>{
    const  { user_id } = req.body;

    Order.find({userId: user_id})
    .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json({ message: err });
      });
});

module.exports = router;