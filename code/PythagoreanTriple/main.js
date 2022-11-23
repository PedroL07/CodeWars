// Description
// Given an array of 3 non-negative integers a, b and c, determine if they form a pythagorean triple.

// A pythagorean triple is formed when:

// c2 = a2 + b2
// where c is the largest value of a, b, c.

// For example: a = 3, b = 4, c = 5 forms a pythagorean triple, because 52 = 32 + 42

// Return Values
// 1 if a, b and c form a pythagorean triple
// 0 if a, b and c do not form a pythagorean triple
// For Python: return True or False
// For JavaScript: return true or false

// My Code

function isPythagoreanTriple(integers) {
  // Good luck friends!
  let sortTheseNumbers = integers.sort(function (a, b) {
    return a - b;
  });
  console.log(sortTheseNumbers);

  let ace = sortTheseNumbers[0] ** 2;
  let bee = sortTheseNumbers[1] ** 2;
  let cee = sortTheseNumbers[2] ** 2;

  if (ace + bee == cee) {
    return true;
  } else if (ace + bee < cee || ace + bee > cee) {
    return false;
  }
}

// clever clode

function isPythagoreanTriple(integers) {
  let massiv = integers.sort((a, b) => a - b);
  return massiv[0] ** 2 + massiv[1] ** 2 == massiv[2] ** 2;
}
