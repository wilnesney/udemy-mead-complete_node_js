const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// add, remove, list, read

yargs
    .command('add', 'Add a note', {
            title : {
                describe: 'Note title',
                demandOption: true,
                type: 'string',                
            },
            body: {
                describe: 'Body of the note',
                demandOption: true,
                type: 'string',
            }
        }, 
        (argv) => notes.addNote(argv.title, argv.body)
    )
    .command('remove', 'Remove a note', {
            title: {
                describe: 'Note title',
                type: 'string',
                demandOption: true,
            }
        }, 
        (argv) => notes.removeNote(argv.title)
    )
    .command('list', 'List notes', {}, () => notes.listNotes())
    .command('read', 'Read a note', {
            title: {
                type: 'string',
                describe: 'Note title',
                demandOption: true,
            }
        }, 
        (argv) => notes.readNote(argv.title))
    ;

yargs.parse();