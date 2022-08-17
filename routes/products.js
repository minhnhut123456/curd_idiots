const express = require('express');
const { list_all_product } = require('../controllers/product');
const router = express.Router();

/* GET users listing. */
router.get('/', list_all_product);

module.exports = router;
