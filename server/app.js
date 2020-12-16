const express = require('express');
const router = require('./router');
const { PORT, URL } = require('./config');

const app = express();
app.use('/', router);

app.listen(PORT, () => {
  console.log(`server is starting at http://${URL}:${PORT}`);
});
