import {addNote, removeNote, listNotes, readNote} from './notes.js';
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
        handler: ((argv) => addNote(argv.title, argv.body))
    })
.parse();

yargs(hideBin(process.argv))
    .command({
        command: 'remove',
        describe: 'Remove a note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            }
        },
        handler: ((argv) => removeNote(argv.title))
    })
.parse();

yargs(hideBin(process.argv))
    .command({
        command: 'list',
        describe: 'List your notes',
        handler: (() => listNotes())
    })
.parse();

yargs(hideBin(process.argv))
    .command({
        command: 'read',
        describe: 'Read a note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            }
        },
        handler: ((argv) => readNote(argv.title))
    })
.parse();

