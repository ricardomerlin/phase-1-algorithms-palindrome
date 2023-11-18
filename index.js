function isPalindrome(word) {
  // Write your algorithm here

  // let length = word.length
  // console.log(length)

  // let makeArray = word.split('')
  // console.log(makeArray)

  // let reverseArray = makeArray.reverse('')
  // let reverseWord = reverseArray.join('')
  // console.log(reverseWord)

  // if (word === reverseWord) {
  //   return true;
  // } else {
  //   return false;
  // }
  for (let i in word) {
    if (word[i] === word[word.length-1-i]) {
      return true
    } else {
      return false
    }
  }


}

/* 
  Add your pseudocode here

  1. Turn the word into an array of letters using .split()
  2. Reverse the array using .reverse()
  3. Join the new array using .join()
  4. Compare the original word and the reversed word using an if statement

  Other method involves using for loop. 
*/

/*
  Add written explanation of your solution here
*/

// // You can run `node index.js` to view these console logs
if (require.main === module) {
//   // add your own custom tests in here
//   console.log("Expecting: true");
  console.log('Expecting: true')
  console.log("=>", isPalindrome("hannah"))
  
  console.log('Expecting: true')
  console.log("=>", isPalindrome("madam"))

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
