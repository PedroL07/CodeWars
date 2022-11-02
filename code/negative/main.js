// Description
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// My Code

function makeNegative(num) {
  // Code?
  if (num >= 0) {
    return num * -1;
  } else {
    return num;
  }
}

// Thoughts
// simple code but had difficulties remebering how to structure my if statement.

// clever clode

function makeNegative(num) {
  return -Math.abs(num);
}
