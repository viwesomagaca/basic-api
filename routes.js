const express = require('express');
const emesa = require("./controllers");

const router = express.Router();

router.get('/items', emesa.getItem);
router.post('/items', emsa.postItems);

router.delete('/items:id', emesa.deleteIte);
router.update('/items:id', emesa.updateItem);


module.exports = router;