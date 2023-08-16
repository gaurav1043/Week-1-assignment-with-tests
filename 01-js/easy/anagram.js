/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function sort(str) {
  let arr = str.split("");
  arr = arr.sort(); //sort() function can only be used on arrays not on strings
  let sortedString = arr.join("");
  return sortedString;
}
function isAnagram(str1, str2) {
  // Checking for length of string.
  if (str1.length !== str2.length) {
    return false;
  }

  // Converting to lowercase
  let str01 = str1.toLowerCase();
  let str02 = str2.toLowerCase();

  // rearranging & SORTING
  if (sort(str01) === sort(str02)) {
    return true;
  } else {
    return false;
  }
}

module.exports = isAnagram;
