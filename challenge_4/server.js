const express = require('express');
const app = express();
const port = 3000 || process.env.port;

app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello Boba');
// })

app.use(express.static('client/dist'));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
})
