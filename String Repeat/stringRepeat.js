//Write a function called repeatStr which repeats the given string string exactly n times.

function repeatStr (n, s) {
    let repeatedString = '';
   while(n > 0){ 
     repeatedString += s;
     n--;
   }
   return repeatedString;
 }