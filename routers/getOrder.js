const express = require("express");
const router = new express.Router();
const Order = require("../models/Order");
const  authenticateToken = require("../middleware/checkAuth");

router.get('/get-order', authenticateToken , (req,res)=>{

    Order.find({userId: req.user.userId})
    .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json({ message: err });
      });
});

module.exports = router;