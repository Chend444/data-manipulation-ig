const express = require('express');
const identityController = require('../controllers/identityController');
const router = express.Router();

router.get('/merge', identityController.getMergedIdentities);

module.exports = router;
