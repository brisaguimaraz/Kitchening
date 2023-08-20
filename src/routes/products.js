const express = require('express');
const productsController = require('../controllers/productsController');
const router = express.Router();

router.get('/detalle/:id?', productsController.detail)


module.exports = router;