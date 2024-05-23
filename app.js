const fs = require("fs");

fs.writeFileSync("notes.txt", "hi there welcome to node js");

// challenge

fs.appendFileSync("notes.txt", ", hope you will enjoy learning node js");
