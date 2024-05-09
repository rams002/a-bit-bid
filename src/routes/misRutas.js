const express = require('express');
const router = express.Router();

const misrutasController = require('../controller/misrutasController');

router
    //
    .get('/', misrutasController.getIndex)

    .get('/sign', misrutasController.getSign)

    .post('/sign', misrutasController.postSign)

    .get('/login', misrutasController.getLogin)

    .post('/login', misrutasController.postLogin);

    

module.exports = router;