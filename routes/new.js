const express = require("express");
const route = express.Router();
const controller=require("../controllers/new")

route.get("/",controller.get);

module.exports=route;