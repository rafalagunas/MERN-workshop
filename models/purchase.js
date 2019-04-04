const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");
//const Schema = mongoose.Schema({});

//create schema for todo
const purchaseModel = new mongoose.Schema({
  ID: "string",
  GOBIERNO: "string",
  DEPENDENCIA: "string",
  RESPONSABLE: "string",
  NUMERO_EXPEDIENTE: "string",
  TITULO_EXPEDIENTE: "string",
  PLANTILLA_EXPEDIENTE: "string",
  CARACTER: "string",
  IMPORTE_CONTRATO: "string"
});

purchaseModel.plugin(mongoosePaginate);
//create model for todo

module.exports = purchaseModel;
