import chalk from 'chalk';
import getNotes from './notes.js';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

let input = yargs(hideBin(process.argv)).parse(); // parse the input arguments , accessed through input._['index'] with 0 being the first argument after npm start

console.log(input._[0]); // access that first argument passed after npm start