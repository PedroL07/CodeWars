// Description 
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// My Code 

function validatePIN (pin) {
    //return true or false
  //   let okayPinOne = pin.leght 
  
    
  //   if (okayPinOne === 4 || okayPinOne === 6 && Number.isInteger(+pin)){
  //     return true;
  //   } else {
  //     return false;
  //   }
  
  //     return typeof pin === 'string' && // verify that the pin is a string
  //     Number.isInteger(+pin) && // make sure that the string is an integer when converted into a number
  //       pin >= 0 &&
  //       (pin % 1 == 0) &&
  //     [4, 6].includes(pin.length) // only accepts 4 and 6 character pins
    
  //     const checkLength = pin.length === 4 || pin.length === 6;
  
  //   const numMatch = /^[0-9]/g
    
  //   if (checkLength && pin.match(numMatch)){  
  //     return true;
  //   }  
    
  //   return false;
    
      return pin.length === 4 || pin.length === 6
      ? pin.replace(/[0-9]/g, "").length === 0
      : false;
  }


// Thoughts 
// Multiple tries

// clever clode

function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
  }