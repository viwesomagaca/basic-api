const express = require('express');
const emesa = require("./controllers");

const router = express.Router();

router.get('/items', emesa.getItem)
       .post()


module.exports = router;