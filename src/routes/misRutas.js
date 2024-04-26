const express = require('express');
const router = express.Router();

const misrutasController = require('../controller/misrutasController');

router
    //
    .get('/', misrutasController.getIndex)

    .get('/sign', misrutasController.getSign);

module.exports = router;