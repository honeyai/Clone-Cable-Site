/* Server */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// app.use(express.static(path.join(__dirname, 'build')));
/* Routes */

app.use('/api/discord', require('./api/discord'));

app.get('/', (request, response) => {
  // response.send("This is from server.js");
  response.status(200).sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
  console.info('Running on port 3000');
})