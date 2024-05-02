const express = require('express');
const router = express.Router();

const misrutasController = require('../controller/misrutasController');

router
    //
    .get('/', misrutasController.getIndex)

    .get('/sign', misrutasController.getSign)

    .get('/login', misrutasController.getLogin);

module.exports = router;