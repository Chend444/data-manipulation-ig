const express = require('express');
const bodyParser = require('body-parser');
const identityRoutes = require('./routes/identityRoutes');
const metricsRoutes = require('./routes/metricsRoutes');


const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/identity', identityRoutes);
app.use('/metrics', metricsRoutes);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
