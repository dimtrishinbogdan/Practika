const axios = require('axios');
require('dotenv').config();

const apiUrl = process.env.API_URL;

async function fetchDataFromApi() {
    const response = await axios.get(apiUrl);
    return response.data;
}

module.exports = { fetchDataFromApi };
