const utf8 = require("utf8");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const purchaseModel = require("../models/purchase");
const paginate = require("mongoose-paginate");
let purchaseCollection = mongoose.model("purchase", purchaseModel);

router.get("/compranet", function(req, res) {
  if (req.query.year) {
    var year = req.query.year;
  } else {
    var year = "";
  }

  purchaseCollection
    .find(
      {
        date: { $regex: year, $options: "i" }
      },
      "",
      {},
      function(err, result) {
        return result;
      }
    )
    .then(resp => res.end(JSON.stringify(resp)));
});
