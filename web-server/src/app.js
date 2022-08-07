const path = require('path');
const express = require('express');

const app = express();

// Serve static assets from the public folder.
const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));

app.get('/weather', (req, res) => {
    res.send({
        location: 'Renton, WA',
        forecast: 'Sunny and warm'
    });
});

const PORT_NUM = 3000;
app.listen(PORT_NUM, () => {
    console.log(`Listening on port ${PORT_NUM}`);
})