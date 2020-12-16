const express = require('express');

const router = express.Router();
const MainController = require('./controllers/main.controller');

router.get('/', MainController.main);

module.exports = router;
