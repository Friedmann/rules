const express = require('express');
const Logger = require('./logger');

const logger = new Logger;
const app = express();

app.get('/', (request, response) => {
    response.send('Hello World');
});

app.listen(80);
