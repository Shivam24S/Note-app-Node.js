// // file system

// const fs = require("fs");

// // creating file and entering some data

// fs.writeFileSync("notes.txt", "hi there welcome to node js");

// // already exists file appending something

// // challenge

// fs.appendFileSync("notes.txt", ", hope you will enjoy learning node js");

// importing file

const getNotes = require("./notes");

console.log(getNotes());

// importing node module

// validating Email using validator node module
const validator = require("validator");

console.log(validator.isEmail("shivam@gmail.com"));
