//Create a function which answers the question "Are you playing banjo?".
//If your name starts with the letter "R" or lower case "r", you are playing banjo!

//The function takes a name as its only argument, and returns one of the following strings:
//name + " plays banjo" 
//name + " does not play banjo"

function areYouPlayingBanjo(name) {
    // Implement me
    if(name.startsWith('R') || (name.startsWith('r'))){ 
      console.log(`${name} likes to play banjo`)  
  }else{ 
      console.log(`${name} dooes not play banjo`)
  }
    return name;
  } 
  
  console.log(areYouPlayingBanjo('rick'))

  //or

function areYouPlayingBanjo(name) {
 
 //locate the first index of the string
name.charAt(0)
// set up conditional that if first index of string is R or r then console log name + `plays banjo`
if( (name.charAt(0) === 'R') || (name.charAt(0) === 'r') ){ 
    console.log(`${name} plays banjo`)
 }else{ 
    console.log(`${name} does not play banjo`)
}
//else console log name + `does not play banjo`
    return name;
   } 
   
   
  console.log(areYouPlayingBanjo('jennie'))