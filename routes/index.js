const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', () => "Welcome api");

module.exports = router;
