import chalk from 'chalk';
import {getNotes, addNote} from './notes.js';
import yargs from 'yargs';
import { hideBin} from 'yargs/helpers';

yargs(hideBin(process.argv))
    .command({
        command: 'add',
        describe: 'Add a new note',
        builder: {  
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Note body',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function(argv) {
            addNote(argv.title, argv.body);
        }
    })
.parse();

yargs(hideBin(process.argv))
    .command({
        command: 'remove',
        describe: 'Remove a note',
        handler: function() {
            console.log('Removing the note!');
        }
    })
.parse();

yargs(hideBin(process.argv))
    .command({
        command: 'list',
        describe: 'List your notes',
        handler: function() {
            console.log('Listing out all notes!');
        }
    })
.parse();

yargs(hideBin(process.argv))
    .command({
        command: 'read',
        describe: 'Read a note',
        handler: function() {
            console.log('Reading a note!');
        }
    })
.parse();

//let input = yargs(hideBin(process.argv)).parse(); // parse the input arguments , accessed through input._['index'] with 0 being the first argument after npm start

//console.log(input); // access that first argument passed after npm start
