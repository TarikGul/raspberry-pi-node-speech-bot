const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');

const env = require('./config/enviornments');

const app = express();

const PORT = env.PORT || 5000;

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
});
