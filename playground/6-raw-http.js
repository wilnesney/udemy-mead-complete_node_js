const http = require('http');

const WEATHERSTACK_API_ACCESS_KEY = 'cb1ab9d2d428fa844c3b2ca01d8157fd';
const WEATHERSTACK_BASE_URL = 'http://api.weatherstack.com/';
const query = encodeURIComponent('523 Williams Ave S Renton WA 98057');
const url = `${WEATHERSTACK_BASE_URL}current?access_key=${WEATHERSTACK_API_ACCESS_KEY}&query=${query}&units=f`;

const request = http.request(url, (response) => {
    const data = [];

    // Event handler for receiving data
    response.on('data', (chunk) => {
        data.push(chunk.toString());
    });

    // Event handler for signal that all data has been received
    response.on('end', () => {
        const body = data.join('');
        const fromJson = JSON.parse(body);
        console.log(fromJson);
    });

    
});

// Error handler. Can't be defined in the request's response callback.
request.on('error', (error) => {
    console.error(error);
});

// Request formation complete. Okay to run.
request.end();