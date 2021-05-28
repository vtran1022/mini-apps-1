const express = require('express');
const app = express();
const port = 3000 || process.env.port;
const router = require('./routes.js');

app.use(express.json());

app.use('/checkout', router);

// app.get('/', (req, res) => {
//   res.send('Hello Boba');
// })

app.use(express.static('client/dist'));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
})

