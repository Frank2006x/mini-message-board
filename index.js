const express = require("express");
const app = express();
const path = require("path");
const defaultRouter = require("./routes/default");
const newRouter = require("./routes/new");
const msgRouter = require("./routes/msg");

require("dotenv").config();
const PORT = process.env.PORT;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use("/", defaultRouter);
app.use("/new", newRouter);
app.use("/msg/", msgRouter);

// app.listen(PORT, () => {
//   console.log("Server UP");
//   console.log(PORT);
// });

module.exports = app;
