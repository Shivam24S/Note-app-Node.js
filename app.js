// // file system

// const fs = require("fs");

// // creating file and entering some data

// fs.writeFileSync("notes.txt", "hi there welcome to node js");

// // already exists file appending something

// // challenge

// fs.appendFileSync("notes.txt", ", hope you will enjoy learning node js");

// importing file with classical js

// const getNotes = require("./notes");

// console.log(getNotes());

// importing node module

// validating Email using validator node module
// const validator = require("validator");

// console.log(validator.isEmail("shivam@gmail.com"));

// importing file with es 6 js

// import getNotes from "./notes.js";

// console.log(getNotes());

// practice session usage of chalk module

import chalk from "chalk";

console.log(chalk.green("success"));

console.log(chalk.green.bgGray("Success!"));
