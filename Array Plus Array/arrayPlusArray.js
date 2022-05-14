/*
P: 2 arrays that includes only integer numbers
R: return a single number that is the sum of all elements in the given arrays
E: ([1,2,3], [4,5,6]) = 21
P: concatenate the 2 arrays and then use reduce to sum all elements 
*/


function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((a, b) => a + b)
   }
   
   console.log(arrayPlusArray([1,2,3], [4,5,6]))
   
   