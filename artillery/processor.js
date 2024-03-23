// Chcę dodać plik do żądania POST w skrypcie, aby przetestować zdolność backendu do przetwarzania załączonych plików. Artillery nie ma takiej wbudowanej funkcji. Piszę więc niestandardową metodę, która tworzy obiekt FormData, dodaje do niego nowy klucz z wartością zawartości pliku, a następnie dodaje ten obiekt do ciała żądania POST.

const formData = require("form-data");
const fs = require("fs");

function setupMultipartFormData(requestParams, context, ee, next) {
  const form = new formData();
  form.append("file", fs.createReadStream(__dirname + "/photo.jpg"));
  requestParams.body = form;
  return next();
}

module.exports = {
  setupMultipartFormData,
};
