// You need to double the integer and return it.

function doubleInteger(i) {

    return i*2;
   }


// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

   function paperwork(n, m) {
    if (n<0 || m<0) {
       return 0;
     }
     else{
       return n*m;
     }
    
   }


//    Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

   function findShort(s){
    let arr = s.split(" ").sort((a, b) => a.length - b.length);
     return arr[0].length
   }



//    Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

//    (In this case, all triangles must have surface greater than 0 to be accepted).


   function isTriangle(a,b,c)
{  let max = Math.max(a, b, c);
  return max < (a + b + c - max);
}


// Write a function to split a string and convert it into an array of words.

// function stringToArray(string){

//     return string.trim().split(" ");
  
//   }