const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();

// Import routes
const routes = require('./routes');

app.use(express.json());

// Define routes
app.use('/', routes);

module.exports = app;