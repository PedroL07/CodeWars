// let numbers = [1,2,3,4,5,6]

document.querySelector('button').addEventListener('click', sumTwoSmallestNumbers)

function sumTwoSmallestNumbers() {  
    let numbers = [7,4,3,4,5,6]
    let lowToHigh = numbers.sort(function(a,b){return a-b;});
    let sum = (lowToHigh[0] + lowToHigh[1])
    console.log(sum)

  }

