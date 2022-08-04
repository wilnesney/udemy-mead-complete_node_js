const fs = require('fs');

const filename = '1-json.json';

/*   Write
const book = {
    title: 'The Last Unicorn',
    author: 'Peter S. Beagle'
};

const bookJson = JSON.stringify(book);

fs.writeFileSync(filename, bookJson);
*/

/* Read
const dataBuffer = fs.readFileSync(filename);
const dataString = dataBuffer.toString();
const dataParsed = JSON.parse(dataString);

console.log(`${dataParsed.title}, by ${dataParsed.author}`);
*/

// Challenge
// Original: {"name":"Andrew","planet":"Earth","age":27}

const challengeFilename = '1-json-challenge.json';
// Read
const challengeBuffer = fs.readFileSync(challengeFilename);
const challengeString = challengeBuffer.toString();
const challengeData = JSON.parse(challengeString);
// Update
challengeData.name = 'Dave';
challengeData.age = 37;
// Write
const updatedJson = JSON.stringify(challengeData);
fs.writeFileSync(challengeFilename, updatedJson);
