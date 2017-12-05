const express = require('express');
const bodyParser = require('body-parser');

const server = express();
server.use(bodyParser.json());

const port = 3000;
server.listen(port, () => {
  console.log(`Express server is listning on ${port}`);
});
