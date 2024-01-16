const express = require('express');
const metricsController = require('../controllers/metricsController');
const router = express.Router();

router.get('/group', metricsController.getGroupedMetrics);

module.exports = router;
