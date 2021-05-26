const express = require('express');
const app = express();
const PORT = 3000 || process.env.port;

app.use(express.json());

app.get('/json_request', (req, res) => {
  const data = req.query.jsonData;
  const parseJson = JSON.parse(data);
  const csvConvert = convertHeader(parseJson) + convertValues(parseJson);

  res.send(csvConvert);
})

let convertHeader = (jsonData) => {
  let cols = Object.keys(jsonData).filter((col) => {
    return col !== 'children';
  });

  let headers = '';

  cols.forEach((col) => headers += `${col},`);

  return headers;
};

let convertValues = (data) => {
  let cols = Object.values(data).filter((col) => {
      return !Array.isArray(col);
  });

  let content = '';

  cols.forEach((col, i) => {
      if (i !== cols.length - 1) {
          content += `${col},`;
          } else {
              content += `${col}\n`;
          }

  });

  if (data.children.length !== 0) {
      data.children.forEach((child) => {
          content += convertValues(child);
      });
  }

  return content;
};

app.use(express.static('client'));

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
})