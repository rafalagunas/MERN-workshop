const mongoose = require("mongoose");
const fs = require("fs");
const purchaseModel = require("../models/purchase");
mongoose.connect(process.env.DB, { useNewUrlParser: true });

let purchaseCollection = mongoose.model("purchase", purchaseModel);

var content;
fs.readFile("../results.json", function read(err, data) {
  if (err) {
    throw err;
  }

  var parsed_data = JSON.parse(data);
  /* console.log(
    "inserting " + parsed_data.length + " purchases \n please wait \n ... "
  );
  purchaseCollection
    .create(parsed_data)
    .then(() => console.log("Data inserted"))
    .then(() => mongoose.connection.close());
*/
  /*parsed_data.forEach(element => {
    console.log(
      "inserting purchase #" +
        element.NUMERO_EXPEDIENTE +
        "  \n please wait \n ... "
    );
    purchaseCollection
      .create(element)
      .then(() => console.log(""))
      .then(() => mongoose.connection.close());
  });
*/
  console.log(
    "inserting " + parsed_data.length + " purchases  \n please wait \n ... "
  );
  for (var i = 0; i < parsed_data.length; i++) {
    purchaseCollection
      .create(parsed_data[i])
      .then(resp => console.log(resp))
      .then(() => mongoose.connection.close());
  }
});
