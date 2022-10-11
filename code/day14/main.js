
// Complete the solution so that it reverses the string passed into it.


function solution(str){
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }



//   Code as fast as you can! You need to double the integer and return it.

function doubleInteger(i) {

    return i*2;
   }