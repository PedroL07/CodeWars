// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!





function betterThanAverage(classPoints, yourPoints) {
    let average = classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
    if (yourPoints > average){
      return true
    }else {
      return false
    }
    
    
  }
  
  
  // The reducer walks through the array element-by-element, at each step adding the current array value
  // to the result from the previous step
  // (this result is the running sum of all the previous steps) — until there are no more elements to add.