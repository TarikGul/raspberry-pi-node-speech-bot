const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
});
