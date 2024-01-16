const { mergeIdentities } = require('../models/identityModel');

const getMergedIdentities = (req, res) => {
  const { identities } = req.body;

  if (!identities || !Array.isArray(identities)) {
    return res.status(400).json({ error: 'Invalid request body' });
  }

  const result = mergeIdentities(identities);
  return res.json(result);
};

module.exports = {
  getMergedIdentities,
};
