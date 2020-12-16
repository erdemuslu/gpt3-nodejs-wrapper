const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { PORT, URL } = require('./config');
const router = require('./router');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', router);

app.listen(PORT, () => {
  console.log(`server is starting at http://${URL}:${PORT}`);
});
