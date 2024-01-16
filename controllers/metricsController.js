const metricsModel = require('../models/metricsModel');

const getGroupedMetrics = (req, res) => {
  const { metrics } = req.body;

  if (!metrics || !Array.isArray(metrics)) {
    return res.status(400).json({ error: 'Invalid request body' });
  }

    const result = metricsModel.groupMetricsByFilters(req.body.metrics);

  if (result) {
    return res.json(result);
  } else {
    return res.status(500).json({ error: 'Error processing metrics data' });
  }
};

module.exports = {
  getGroupedMetrics,
};
