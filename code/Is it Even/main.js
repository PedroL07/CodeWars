// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.


function testEven(n) {
  
//   when using (%) a even number is determined by any remainder. If there's no remainer = even. elsels its an odd number.
  if (n % 2 === 0)
  {
    return true;
  }
  else{
    return false;}
   
}

// used - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder