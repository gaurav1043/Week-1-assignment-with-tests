// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
const fs = require("fs");

let input = "You are reading the updated content";
fs.writeFile("./a.txt", input, (err) => {
  if (err) throw err;
  else {
    console.log("The file is updated with the given data");
  }
});
