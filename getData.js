const fs = require("fs");
const fetch = require("node-fetch");

function getData(number) {
  return fetch("https://api.datos.gob.mx/v1/compranet?page=" + number, {
    method: "GET"
  })
    .then(res => res.json()) // expecting a json response
    .then(json => {
      return JSON.stringify(json.results);
    });
}
function mainFunction() {
  for (let i = 1; i <= 100; i++) {
    getData(i)
      .then(response => {
        console.log(response);
        fs.writeFile("./files/" + i + ".json", response, function(err) {
          if (err) {
            return console.log(err);
          }
          console.log("Records saved in file #" + i);
        });
        for (var j = 1; j <= 100; j++) {}
      })
      .catch(function() {
        console.log("Promise Rejected");
      });
  }
}
mainFunction();
