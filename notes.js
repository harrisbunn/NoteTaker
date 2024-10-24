import fs from 'fs';
import chalk from 'chalk';

export const addNote = (_title, _body) => {
    const notes = loadNotes();

    const dupNotes = notes.filter((note) => note.title === _title);

    if (dupNotes.length === 0) {
        notes.push({
            title: _title,
            body: _body
        });
        console.log(chalk.green('Note added!'));
        saveNotes(notes);
    } else {
        console.log(chalk.red('Note title already exists!'));
    }
}

export const removeNote = (_title) => {
    const notes = loadNotes();

    const notesToKeep = notes.filter((note) => note.title !== _title); // filter out the note to be removed

    if (notes.length > notesToKeep.length) { // if original array is greater than new array, save the new array with note removed
        saveNotes(notesToKeep);
        console.log(chalk.green(`Note with title: "${_title}" removed!`));
    } else {
        console.log(chalk.red('Note not found!'));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json'); // returns binary data in form of a buffer from notes.json
        const dataJSON = dataBuffer.toString(); // convert buffer to string
        return JSON.parse(dataJSON); //return parsed JSON object
    } catch (e) {
        return []; // return empty array if file does not exist
    }
}


