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

// import chalk from "chalk";

// console.log(chalk.green("success"));

// console.log(chalk.green.bgGray("Success!"));

// getting user input using process.argv[] and command line

// console.log("argv", process.argv[2]);

// if (process.argv[2] === "add") {
//   console.log("adding Note");
// } else if (process.argv[2] === "remove") {
//   console.log("removing Note");
// }

// yargv second part

// import yargs from "yargs";
// import { hideBin } from "yargs/helpers";

// yargs(hideBin(process.argv))
//   .command({
//     command: "add",
//     describe: "adding Note",
//     builder: {
//       title: {
//         describe: "first note",
//         demandOption: true,
//         type: "string",
//       },
//     },
//     handler: function (argv) {
//       console.log("adding note " + argv.title);
//     },
//   })
//   .command({
//     command: "remove",
//     describe: "removing Note",
//     handler: function () {
//       console.log("removing note ...");
//     },
//   })
//   .command({
//     command: "list",
//     describe: "list note",
//     handler: function () {
//       console.log("listing notes ...");
//     },
//   })
//   .command({
//     command: "read",
//     describe: "read note",
//     handler: function () {
//       console.log("reading note ...");
//     },
//   }).argv;

// storing data json

import fs from "fs";

const data = fs.readFileSync("1-json.json");

const dataBuffer = data;

console.log("data Buffer", dataBuffer);

// now converting data into string

const output = dataBuffer.toString();

console.log("output", output);

// now parsing object

const result = JSON.parse(output);

console.log("result", result);

// now overwriting object

console.log("overwriting  result", (result.name = "shiv"));

console.log("overWritten result", result);
