const express = require("express");
const route = express.Router();
const controller = require("../controllers/default");

route.get("/", controller.get);

module.exports = route;
