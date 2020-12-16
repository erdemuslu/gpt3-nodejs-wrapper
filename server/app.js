const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const { PORT, URL } = require('./config');
const router = require('./router');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../client'));

app.use(cors());
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', router);

app.listen(PORT, () => {
  console.log(`server is starting at http://${URL}:${PORT}`);
});
