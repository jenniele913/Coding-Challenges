/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

*/

/*
P: non-empty array of integers
R: return result of multiplying the values together in order
E: [1,2,3,4] => 1*2*3*4 = 24 
P: use .reduce to multiply the first value to the next value 

*/ 


function grow(x){
    return x.reduce((acc,c) => acc*c, 1)
    
    }
    
    console.log(grow([]))
    
    