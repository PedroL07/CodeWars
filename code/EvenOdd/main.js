// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


function evenOrOdd(number) {
    if (number % 2 === 0)
      {return ('Even')}
    if(number % 2 != 0){
      return ('Odd')
    }
  }
  
  // module (%) allows you to find out if there's any remainder. if there's a remainder after the number is an odd #