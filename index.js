function isPalindrome(word) {
  // Pseudocode:
  // 1. Convert the word to an array of characters.
  // 2. Reverse the array.
  // 3. Convert the reversed array back to a string.
  // 4. Check if the original word is equal to the reversed word.
  // 5. Return true if they are equal, otherwise return false.

  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

/* 
  Explanation:
  The function takes a word as input, converts it to an array of characters,
  reverses the array, and then converts it back to a string. Finally, it checks
  if the original word is equal to the reversed word, returning true if they are
  equal and false otherwise.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
