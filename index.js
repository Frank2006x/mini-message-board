const express = require("express");
const app = express();
const path = require("path");
const defaultRouter = require("./routes/default");
const newRouter = require("./routes/new");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", defaultRouter);
app.use("/new", newRouter);

app.listen(3000, () => {
  console.log("Server UP");
});
