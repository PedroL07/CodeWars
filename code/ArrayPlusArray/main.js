// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.



function arrayPlusArray(arr1, arr2) {  
    let sumArr1 = arr1.reduce((a, b) => a + b, 0);
    let sumArr2 = arr2.reduce((a, b) => a + b, 0);
    return sumArr1+ sumArr2
      
  }
  // using the reduce method in order to combine all numbers in the array than adding those sums
  
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce