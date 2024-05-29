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

// yargs module

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

yargs(hideBin(process.argv)).command({
  command: "add",
  describe: "adding Note",
  handler: function () {
    console.log("adding note ...");
  },
}).argv;

yargs(hideBin(process.argv)).command({
  command: "remove",
  describe: "removing Note",
  handler: function () {
    console.log("removing note ...");
  },
}).argv;

yargs(hideBin(process.argv)).command({
  command: "list",
  describe: "list note",
  handler: function () {
    console.log("listing notes ...");
  },
}).argv;

yargs(hideBin(process.argv)).command({
  command: "read",
  describe: "read note",
  handler: function () {
    console.log("reading note ...");
  },
}).argv;
