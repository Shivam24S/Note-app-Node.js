// // exporting for classical js

// // const getNotes = function note() {
// //   return "your notes....";
// // };

// // module.exports = getNotes;

// // exporting with es6 type

// // export default function getNotes() {
// //   return "your notes....";
// // }

// import fs from "fs";
// import chalk from "chalk";

// export const addNotes = (title, body) => {
//   const notes = loadNotes();

//   const duplicateTitle = notes.filter((item) => {
//     return item.title === title;
//   });

//   if (duplicateTitle.length === 0) {
//     notes.push({
//       title: title,
//       body: body,
//     });
//     console.log("notesData", notes);
//     saveNotes(notes);
//     console.log(chalk.green.inverse("new Note added"));
//   } else {
//     console.log(chalk.red.inverse("title already taken"));
//   }
// };

// export const saveNotes = (notes) => {
//   const dataJSON = JSON.stringify(notes);
//   fs.writeFileSync("notes.json", dataJSON);
// };

// export const loadNotes = () => {
//   try {
//     const dataBuffer = fs.readFileSync("notes.json");
//     const dataJSON = dataBuffer.toString();
//     return JSON.parse(dataJSON);
//   } catch (error) {
//     return [];
//   }
// };

// // removing notes

// export const removeNotes = (title, body) => {
//   const notes = loadNotes();

//   const updatedData = notes.filter(
//     (note) => note.title !== title || note.body !== body
//   );

//   if (updatedData.length === notes.length) {
//     console.log(chalk.red.inverse("No matching notes found for removal."));
//   } else {
//     saveNotes(updatedData);
//     console.log(chalk.green.inverse("notes removed successfully"));
//   }
// };

// Assuming you're using ES6 modules and your environment supports them

import fs from "fs";
import chalk from "chalk";

export const addNotes = (title, body) => {
  const notes = loadNotes();

  const duplicateTitle = notes.filter((item) => item.title === title);

  if (duplicateTitle.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    console.log("notesData", notes);
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added"));
  } else {
    console.log(chalk.red.inverse("Title already taken"));
  }
};

export const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

export const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

// Removing notes

export const removeNotes = (title, body) => {
  const notes = loadNotes();

  const updatedData = notes.filter(
    (note) => note.title !== title && note.body !== body
  );

  if (updatedData.length === notes.length) {
    console.log(chalk.red.inverse("No matching notes found for removal."));
  } else {
    saveNotes(updatedData);
    console.log(chalk.green.inverse("Notes removed successfully"));
  }
};
