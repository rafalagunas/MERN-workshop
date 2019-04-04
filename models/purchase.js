const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");
//const Schema = mongoose.Schema({});

//create schema for todo
const purchaseModel = new mongoose.Schema({
  ID: "string",
  GOBIERNO: "string",
  DEPENDENCIA: "string"
});

purchaseModel.plugin(mongoosePaginate);
//create model for todo

module.exports = purchaseModel;
