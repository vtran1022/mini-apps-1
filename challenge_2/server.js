const express = require('express');
const app = express();
const PORT = 3000 || process.env.port;

app.use(express.json());

app.get('/json_request', (req, res) => {
  console.log(req.query.jsonData);
  res.send('boba');
})

app.use(express.static('client'));

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
})