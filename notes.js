import fs from 'fs';

export const getNotes = function() {
    return 'Your notes...';
}

export const addNote = function(_title, _body) {
    const notes = loadNotes();

    const dupNotes = notes.filter((note) => note.title === _title);

    if (dupNotes.length === 0) {
        notes.push({
            title: _title,
            body: _body
        });

        saveNotes(notes);
    } else {
        console.log('Note title already exists!');
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json'); // returns binary data in form of a buffer from notes.json
        const dataJSON = dataBuffer.toString(); // convert buffer to string
        return JSON.parse(dataJSON); //return parsed JSON object
    } catch (e) {
        return []; // return empty array if file does not exist
    }
}


