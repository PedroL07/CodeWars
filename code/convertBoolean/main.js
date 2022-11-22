// Description 
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// My Code 
function boolToWord( bool ){
    //...
    let x = bool;
    
    if( x == true){
      return ('Yes');
    } else {
      return ('No')
    }
  }


// clever clode

function boolToWord( bool ){
  return bool ? 'Yes':'No';
}
