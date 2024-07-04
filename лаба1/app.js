const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send(process.env.MESSAGE || 'Hello World');
});

module.exports = app;
