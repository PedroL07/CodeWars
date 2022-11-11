// Description
// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string)

// My Code
function sumStr(a, b) {
  //   conver the strings to numbers
  let first = Number(a);
  let second = Number(b);
  // now that they are intergers add the to grab the sum
  let sum = first + second;
  // convert the sum back to a string
  let newSum = sum.toString();
  // return the string
  return newSum;
}

// clever clode

function sumStr(a, b) {
  return String(Number(a) + Number(b));
}
