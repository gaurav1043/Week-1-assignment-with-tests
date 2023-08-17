// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
//

const fs = require("fs");

function removeExtraSpaces(filename) {
  // Read the content of the file
  fs.readFile(filename, "utf8", (err, content) => {
    if (err) {
      console.error(err);
      return;
    }

    // Remove extra spaces using regular expression
    const modifiedContent = content.replace(/\s+/g, " ");

    // Write the modified content back to the file
    fs.writeFile(filename, modifiedContent, "utf8", (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("File content successfully modified and written.");
    });
  });
}

// Replace 'input.txt' with the path to your file
const filePath = "./b.txt";
removeExtraSpaces(filePath);

//

// /.../: The / characters delimit the start and end of a regular expression literal.

// \s+: This is a regular expression pattern that matches one or more whitespace characters. \s represents any whitespace character (including spaces, tabs, and newlines), and + indicates that it should match one or more occurrences.

// g: This is a flag that stands for "global." When used with a regular expression, it indicates that the regular expression should be applied globally across the entire string, rather than stopping after the first match.

// So, in the context of the replace method, the regular expression /s+/g is looking for sequences of one or more whitespace characters within the content string. When it finds such sequences, it replaces them with a single space.
