/*
MAIN APPLICATION
THIS CODE RUNS THE CLIENT AND THE BACK-END
*/
var express = require("express");
var app = express();
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//CALL ROUTES
const routes = require("./routes/api");
mongoose
  .connect(
    "mongodb+srv://admin:Sc5aeo8L3oDgnrSN@cluster0-ageas.mongodb.net/compranet",
    { useNewUrlParser: true }
  )
  .then(() => console.log(`Database connected successfully`))
  .catch(err => console.log(err));
mongoose.Promise = global.Promise;
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.contentType("application/json, charset=utf-8");
  next();
});

app.use(bodyParser.json());

app.use("/api", routes);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(3500);
