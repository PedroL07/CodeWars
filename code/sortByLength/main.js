// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.


function sortByLength (array) {
    return array.sort(function(a,b){return a.length - b.length})
};

// return a array 

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// sort it out shortest to longest
// in order to find find how many characters are in the string use . lenght
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length