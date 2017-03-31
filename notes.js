"use strict";

const fs = require('fs');

let addNote = (title, body) => {
    let notes = [];
    let note = {
        title,
        body
    };

    try {
        let notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e) {

    }

    notes.push(note);

    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let getAll = () => {
    console.log('Listing all notes');
};

let getNote = (title) => {
    console.log('Getting', title);
};

let removeNote = (title) => {
    console.log('Removing', title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};