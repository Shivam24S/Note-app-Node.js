// exporting for classical js

// const getNotes = function note() {
//   return "your notes....";
// };

// module.exports = getNotes;

// exporting with es6 type

// export default function getNotes() {
//   return "your notes....";
// }

import fs from "fs";
import chalk from "chalk";

export const addNotes = function (title, body) {
  const notes = loadNotes();

  const duplicateTitle = notes.filter((item) => {
    return item.title === title;
  });

  if (duplicateTitle.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    console.log("notesData", notes);
    saveNotes(notes);
    console.log("new Note added");
  } else {
    console.log("title already taken");
  }
};

export const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

export const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

// removing notes

export const removeNotes = function (title, body) {
  const notes = loadNotes();

  const updatedData = notes.filter(
    (note) => note.title !== title || note.body !== body
  );

  if (updatedData.length === notes.length) {
    console.log(chalk.red.inverse("No matching notes found for removal."));
  } else {
    saveNotes(updatedData);
    console.log(chalk.green.inverse("notes removed successfully"));
  }
};
