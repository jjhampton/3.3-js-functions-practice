/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(num1, num2){
  "use strict";
  return (num1 < num2) ? num2 : num1;
}

console.assert(max(2,3) === 3, "failed");
console.assert(max(2,2) === 2, "failed");
console.assert(max(3,2) === 3, "failed");

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3){
  "use strict";
  var numArray = [num1, num2, num3];
  var max = -9007199254740992;

  for (var i = 0; i < 3; i++) {
    if (numArray[i] > max) {
      max = numArray[i];
    }
  }
  return max;
}

console.assert(maxOfThree(2,3,4) === 4, "failed");
console.assert(maxOfThree(4,3,2) === 4, "failed");
console.assert(maxOfThree(2,4,3) === 4, "failed");
console.assert(maxOfThree(2,2,3) === 3, "failed");
console.assert(maxOfThree(2,3,3) === 3, "failed");
console.assert(maxOfThree(2,2,2) === 2, "failed");
console.assert(maxOfThree(2,3,-4) === 3, "failed");
console.assert(maxOfThree(-2,-3,-4) === -2, "failed");

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
  "use strict";
  var charChecked;
  var vowelArray = ["a","e","i","o","u"];
  if (typeof char !== "string") {
    return false;
  }
  if (char.length > 1) {
    return false;
  }
  charChecked = char.toLowerCase();
  for (var i = 0; i < 5; i++) {
    if (charChecked.indexOf(vowelArray[i]) === -1) {
      return false;
    }
    else {
      return true;
    }
  }
}

console.assert(isVowel("a") === true, "failed");
console.assert(isVowel("b") === false, "failed");
console.assert(isVowel("A") === true, "failed");
console.assert(isVowel("B") === false, "failed");
console.assert(isVowel(2) === false, "failed");
console.assert(isVowel("aa") === false, "failed");

// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
  "use strict";
  var skipCharList = "aeiou123456789";
  var phraseArray = phrase.toLowerCase().split("");

  phraseArray.forEach(function (letter, index, array) {
    if (skipCharList.indexOf(letter) === -1) {
      phraseArray[index] += "o" + letter;
    }
  });

  return phraseArray.join("");
}
console.assert(rovarspraket("test") === "totesostot", "failed");
console.log(rovarspraket("test"));
console.assert(rovarspraket("eee") === "eee", "failed");
console.log(rovarspraket("eee"));
console.assert(rovarspraket("123") === "123", "failed");
console.log(rovarspraket("123"));


// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(array){
  "use strict";
  var sumAnswer = 0;

  array.forEach(function(el, index) {
    sumAnswer += el;
  });
  return sumAnswer;
}

function multiply(array){
  "use strict";
  var product;

  array.forEach(function(el, index) {
    if (index === 0) {
      product = el;
    }
    else {
      product *= el;
    }
  });
  return product;

}
console.assert(sum([1,2,3,4]) === 10, "failed");
console.log(sum([1,2,3,4]));
console.assert(multiply([2,1,3,4]) === 24, "failed");
console.log(multiply([2,1,3,4]));


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
  "use strict";
  var reversedString = string.split("").reverse().join("");
  return reversedString;
}
console.assert(reverse("jag testar") === "ratset gaj", "failed");
console.log(reverse("jag testar"));

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(wordArray){
  "use strict";
  var longestWord = wordArray[0];

  for (var i = 1; i < wordArray.length; i++) {
      if (wordArray[i].length > longestWord.length) {
        longestWord = wordArray[i];
      }
    }
  return longestWord.length;
}
console.assert(findLongestWord(["long", "line", "longest"]) === 7, "failed");
console.log(findLongestWord(["long", "line", "longest"]));

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, integer){
  "use strict";
  var wordsLongerThanInteger = [];

  words.forEach(function(word, index) {
    if (word.length > integer) {
      wordsLongerThanInteger.push(word);
    }
  });
  return wordsLongerThanInteger;
}

function arraysEqual(one, two) {
  var areEqual = true;
  if(one.length != two.length) return false;
  one.forEach(function(el, i) {
    if(el != two[i]) {
      areEqual = false;
    }
  });
  return areEqual;
}
// console.assert(filterLongWords(["hello", "how", "are", "you", "doin"], 3) === ["hello", "doin"], "failed");
//console.assert(arraysEqual(filterLongWords(["hello", "how", "are", "you", "doin"], 3), ["hello", "doin"]) === true), "failed");
console.assert(arraysEqual(filterLongWords(["hello", "how", "are", "you", "doin"], 3), ["hello", "doin"]) === true, "failed");
console.log(filterLongWords(["hello", "how", "are", "you", "doin"], 3));

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
  "use strict";

  var stringArray = string.split("");
  var listing = {};

  stringArray.forEach(function(char, index){
    listing[char] = 0;
  });

  stringArray.forEach(function(char, index){
    listing[char] += 1;
  });

  return listing;
}

//credit: http://stackoverflow.com/questions/1068834/object-comparison-in-javascript, user Jean Vincent
function objectCompare(x, y) {
  if ( x === y ) return true;
    // if both x and y are null or undefined and exactly the same

  if ( ! ( x instanceof Object ) || ! ( y instanceof Object ) ) return false;
    // if they are not strictly equal, they both need to be Objects

  if ( x.constructor !== y.constructor ) return false;
    // they must have the exact same prototype chain, the closest we can do is
    // test there constructor.

  for ( var p in x ) {
    if ( ! x.hasOwnProperty( p ) ) continue;
      // other properties were tested using x.constructor === y.constructor

    if ( ! y.hasOwnProperty( p ) ) return false;
      // allows to compare x[ p ] and y[ p ] when set to undefined

    if ( x[ p ] === y[ p ] ) continue;
      // if they have the same strict value or identity then they are equal

    if ( typeof( x[ p ] ) !== "object" ) return false;
      // Numbers, Strings, Functions, Booleans must be strictly equal

    if ( ! Object.equals( x[ p ],  y[ p ] ) ) return false;
      // Objects and Arrays must be tested recursively
  }

  for ( p in y ) {
    if ( y.hasOwnProperty( p ) && ! x.hasOwnProperty( p ) ) return false;
      // allows x[ p ] to be set to undefined
  }
  return true;
}

function deepEqual(x, y) {
	if (((typeof x === "object") && (x !== null)) && ((typeof y === "object") && (y !== null))) {

		var compareLength = function(x,y) {
			lengthX = 0;
			lengthY = 0;
			for (var prop in x) {
				lengthX++;
			}
			for (var prop in y) {
				lengthY++;
			}
			return (lengthX === lengthY);
		}

		if (compareLength(x,y) === false) {
			return false;
		}

		for (var prop in x) {
			if (prop in y) {
				if (deepEqual(x[prop], y[prop]) === false) {
					return false;
				}
			}
			else {
				return false;
			}
		}
		return true;
	}
return (x === y);
}

//
// console.assert(objectCompare(charFreq("abbabcbdbabdbdbabababcbcbab"), {"a":7,"b":14,"c":3,"d":3}) === true, "failed");
console.assert(deepEqual(charFreq("abbabcbdbabdbdbabababcbcbab"), {"a":7,"b":14,"c":3,"d":3}) === true, "failed");
console.log(charFreq("abbabcbdbabdbdbabababcbcbab"));
