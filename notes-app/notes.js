const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'Your notes...';

const filename = 'notes.json';

const loadData = () => {
    try {
        const dataBuffer = fs.readFileSync(filename);
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch (e) {
        return [];
    }
};

const saveData = (data) => {
    try {
        const asJson = JSON.stringify(data);
        fs.writeFileSync(filename, asJson);
    } catch (e) {
        console.log(`Failed to save data: ${message}`);
    }
}

module.exports = {
    addNote: (title, body) => {
        const data = loadData();
        if (data.some((note) => note.title === title)) {
            console.log(chalk.red.inverse('Cannot add note with duplicate title!'));
        } else {
            data.push({title, body});
            saveData(data);
            console.log(chalk.green.inverse('Note added!')); //TODO: Unless saveData() failed...
        }
    },
    removeNote: (title) => {
        const data = loadData();
        const filtered = data.filter((note) => note.title !== title);  // Is filter() preferable to alternatives? (e.g., splice())
        if (filtered.length === data.length) {
            console.log(chalk.red.inverse(`No notes titled "${title}" found.`));
        } else {
            saveData(filtered);
            console.log(chalk.green.inverse('Note removed.'));
        }
    },
    listNotes: () => {
        const data = loadData();
        console.log(chalk.bold.magenta('--Your Notes--'));
        data.forEach((note) => console.log(note.title));
    },
    readNote: (title) => {
        const data = loadData();
        const note = data.find((n) => n.title === title);
        if (note) {
            console.log(chalk.bold.magenta(note.title));
            console.log(note.body);
        } else {
            console.log(chalk.red.inverse('Note not found.'));
        }
    }
};