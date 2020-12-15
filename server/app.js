const express = require('express');
const { PORT } = require('./config');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello api!');
});

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});