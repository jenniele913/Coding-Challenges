/*Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

p: array that contains numbers or an empty array or array is null
r: return new array where the first number is the number of positive numbers, second number is the 
sum of negative numbers, or if array is null/empty return and empy array 
e:  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
p: check if array is empty or null and return and empty array by using a conditional. 
	use for loop to count for positive numbers and store the count in a new variable called countOfPos, and sum the negative numbers and store in variable called sumOfNeg

*/


function countPositivesSumNegatives(input) {

    if (input === null || input.length == 0 ){
      return [ ]
     }
      
    let countOfPos = 0 
    let sumOfNeg = 0 
    
    for (let i = 0; i<=input.length-1; i++){ 
        if ( input[i] > 0){ 
          console.log(countOfPos++)
        }else{ 
          console.log(sumOfNeg += input[i])
        }
    }
    
    return [countOfPos,sumOfNeg]
    }
    
    
    
    console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
    