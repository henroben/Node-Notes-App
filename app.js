"use strict";

console.log('Starting App');

const fs = require('fs');
const os = require('os');

let user = os.userInfo();

fs.appendFileSync('greetings.txt', `Hello ${user.username}! `);