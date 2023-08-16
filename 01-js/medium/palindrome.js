/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function removePunctuation(text) {
  let punctuation = /[\.,?!]/g;
  let newText = text.replace(punctuation, "");
  newText = newText.toLowerCase().trim().replaceAll(" ", "");
  return newText;
}
function isPalindrome(str) {
  // cleaning string, removing spaces, etc
  let strReceived = removePunctuation(str);
  //CReating reversed string array
  let strReverse = [];
  // loop forpushing elements from right to left
  for (let i = str.length - 1; i >= 0; i--) {
    strReverse.push(strReceived[i]);
  }
  // converting array to string
  let reversedStr = strReverse.join("").toString();
  // checking with received str
  if (reversedStr === strReceived) {
    return true;
  } else return false;
}

module.exports = isPalindrome;
