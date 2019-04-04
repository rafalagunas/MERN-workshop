const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const purchaseModel = require("../models/purchase");
const paginate = require("mongoose-paginate");
let purchaseCollection = mongoose.model("purchase", purchaseModel);

router.get("/compranet", function(req, res) {
  if (req.query.page) {
    var page = req.params.page;
    var limit = 1000;
    purchaseCollection.paginate({}, { page: page, limit: limit }, function(
      err,
      result
    ) {
      var resp = JSON.stringify(result);
      res.end(resp);
      // result.docs
      // result.total
      // result.limit - 10
      // result.page - 3
      // result.pages
    });
  } else {
    var page = 1;
    var limit = 0;
    purchaseCollection.find({}, "", function(err, result) {
      var resp = JSON.stringify(result);
      res.end(resp);
      // result.docs
      // result.total
      // result.limit - 10
      // result.page - 3
      // result.pages
    });
  }
});

module.exports = router;
