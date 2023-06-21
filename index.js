const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("./db/mongoose");

const getOrderRoute = require("./routers/getOrder");
const addOrderRoute = require("./routers/addOrder");
const addUserRoute = require("./routers/addUser");
const loginUserRoute = require("./routers/loginUser");

app.use(express.json());
app.use(cors({origin: true}));

app.use(getOrderRoute);
app.use(addOrderRoute);
app.use(addUserRoute);
app.use(loginUserRoute);

app.listen(3001, ()=>{
    console.log("Voosh is running on 3001");
})