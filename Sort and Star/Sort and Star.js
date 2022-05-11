// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

/*
P: an array of strings 
R: return first string in alaphabetical order with *** in between each letter
E: ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' )

["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e');
P: sort string,
	get the first word in array
  add *** in between each letter

*/

function twoSort(s) {
	let sortedArr =  s.sort()
  
  return sortedArr[0].split('').join('***')
  
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))