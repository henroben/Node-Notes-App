"use strict";

console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
let command = argv._[0];
console.log('Command: ', command);
console.log('Yargs:', argv);

if (command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    if (note) {

        console.log('Note Created');
        notes.logNote(note);

    } else if (note === undefined) {

        console.log('A note with this title already exists. Save aborted');

    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {

    let note = notes.getNote(argv.title);
    if (note) {
        console.log('Note Found');
        notes.logNote(note);
    } else {
        console.log('No note found with title', argv.title);
    }

} else if (command === 'remove') {

    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);

} else {
    console.log('Command not recognised');
}