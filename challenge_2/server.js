const express = require('express');
const app = express();
const PORT = 3000 || process.env.port;

app.post('/json_request', (req, res) => {

})

app.use(express.static('client'));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})