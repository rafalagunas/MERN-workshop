/*
MAIN APPLICATION
THIS CODE RUNS THE CLIENT AND THE BACK-END
*/
var express = require("express");
var app = express();
const path = require("path");
const bodyParser = require("body-parser");

//CALL ROUTES

const routes = require("./routes/api");
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
