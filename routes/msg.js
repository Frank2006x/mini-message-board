const express = require("express");
const route = express.Router();
const controller = require("../controllers/msg");

route.get("/:username", controller.get);

module.exports = route;
