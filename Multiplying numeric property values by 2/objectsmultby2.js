//Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.



let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  
  
  
  
  function multiplyNumeric(obj) {
      for (let key in obj){  //use for in loop to go through each property in object
        if (typeof obj[key]=="number"){ // used typeof to compare which property is a number because if it is a number then it will multiply the value by 2 
          obj[key]*= 2
      }
    }return obj//need to return the value somewhere
  }
  
  console.log(multiplyNumeric(menu));