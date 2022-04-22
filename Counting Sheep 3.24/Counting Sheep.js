//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).



function countSheeps(arrayOfSheep) {
    //create place holder for sheep value
      let sheep = 0 
    // loop through number of sheep array (want entire array by using .length)
      for(let i = 0; i<arrayOfSheep.length; i++){
    //if sheep value is equal to true then add one 
        if(arrayOfSheep[i] === true){ 
    // another syntax is sheep = sheep+1
            sheep++;    
        }
      }
    //return # of sheep
        return sheep;
    }