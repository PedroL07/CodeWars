// Description 
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// My Code 

function oddOrEven(array) {
    const initialValue = 0;
 const sumWithInitial = array.reduce(
   (accumulator, currentValue) => accumulator + currentValue,
   initialValue
 );
 
 console.log(sumWithInitial);
   
   if (sumWithInitial % 2 == 0) {
     return ('even');}
   else {return ('odd')}
   
 }

// clever clode
function oddOrEven(arr) {
    return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
  }
