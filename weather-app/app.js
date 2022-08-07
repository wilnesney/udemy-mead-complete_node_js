const process = require('process');

const forecast = require('./utils/forecast.js');
const geocode = require('./utils/geocode.js');

if (process.argv.length < 3) {
    return console.error('Please provide a location to lookup weather for.');
} else if (process.argv > 3) {
    return console.error('Multi-word locations must be in quotes.');
}

geocode(process.argv[2], (error, data) => {
    if (error) {
        return console.error(error);
    } 

    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
            return console.error(error);
        }
        
        console.log(data.location);
        console.log(forecastData);
    })
})
