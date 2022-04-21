//Find the smallest integer in any given array 

function findSmallestInteger(num){ 
    let smallNumber = Number(Math.min(...num));
    console.log(smallNumber)
    }
    
    findSmallestInteger([5,10,3])
