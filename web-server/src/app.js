const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send('Hello express!');
});

app.get('/help', (req, res) => {
    res.send('Help page');
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.get('/weather', (req, res) => {
    res.send('Weather page');
});

const PORT_NUM = 3000;
app.listen(PORT_NUM, () => {
    console.log(`Listening on port ${PORT_NUM}`);
})