const fs = require("fs");
const testFolder = "./files/";
let text = "";
function returnData() {
  return new Promise(resolve =>
    fs.readdir(testFolder, (err, files) => {
      files.forEach(file => {
        fs.readFile(testFolder + file, function read(err, data) {
          if (err) {
            throw err;
          }

          var content = JSON.parse(data);

          for (var i = 0; i < content.length; i++) {
            text +=
              "{" +
              '"ID":' +
              '"' +
              content[i]._id +
              '"' +
              "," +
              '"GOBIERNO":' +
              '"' +
              content[i].GOBIERNO +
              '"' +
              "," +
              '"DEPENDENCIA":' +
              '"' +
              content[i].DEPENDENCIA.toString()
                .replace(/(\r\n|\n|\r)/gm, "")
                .replace(/"/g, "")
                .replace(/“/g, "")
                .replace(/”/g, "")
                .replace(/_/g, "")
                .replace(/-/g, "")
                .replace(".", "")
                .replace(/:/g, "")
                .replace("|", "")
                .replace(/\//g, "") +
              '"' +
              "," +
              '"RESPONSABLE":' +
              '"' +
              content[i].RESPONSABLE +
              '"' +
              "," +
              '"NUMERO_EXPEDIENTE":' +
              '"' +
              content[i].NUMERO_EXPEDIENTE +
              '"' +
              "," +
              '"TITULO_EXPEDIENTE":' +
              '"' +
              content[i].TITULO_EXPEDIENTE.toString()
                .replace(/(\r\n|\n|\r)/gm, "")
                .replace(/"/g, "")
                .replace(/“/g, "")
                .replace(/”/g, "")
                .replace(/_/g, "")
                .replace(/-/g, "")
                .replace(".", "")
                .replace(/:/g, "")
                .replace("|", "")
                .replace(/\//g, "")
                .replace(/\\/g, "") +
              '"' +
              "," +
              '"IMPORTE_CONTRATO":' +
              '"' +
              content[i].IMPORTE_CONTRATO +
              '"' +
              "},";
          }
          console.log(text);

          fs.writeFile("./results.json", text, function(err) {
            if (err) {
              return console.log(err);
            }
          });
          resolve();
        });
      });
    })
  );
}

function joinData() {
  var content;
  fs.readFile("./results.json", function read(err, data) {
    if (err) {
      throw err;
    }
    if (data) {
      content = data.toString();
      var cleanText = content.toString().slice(0, -1);
      var cleanText = "[" + cleanText + "]";
      console.log(cleanText);
      fs.writeFile("./results.json", cleanText, function(err) {});
    }
  });
}

function mainFunction() {
  returnData().then(() => joinData());
}
mainFunction();

module.exports = {
  returnData: function() {
    mainFunction();
  }
};
