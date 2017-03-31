"use strict";

console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');

const notes = require('./notes.js');

var filteredArray = _.uniq(['Ben', 1, 'Ben', 1, 2, 3, 4]);
console.log(filteredArray);

// console.log(_.isString(true));
// console.log(_.isString('Andrew'));

// console.log(notes.add(5, 17));

// let user = os.userInfo();
//
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);