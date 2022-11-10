// Description 
// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// My Code 
function past(h, m, s) {
    //#Happy Coding! ^_^
    //   I used google to calculate how many milliseconds are in a second then multiplied by 60 to get a minute and 60 once again to get the hour
    let newS = (s * 1000)
    let newM = (m * 60000)
    let newH = (60000 * 60)
    let newHour = (h * newH)

    //    adding seconds mins and hour to grab a total
    let sum = (newS + newM + newHour)

    return sum

}

// clever clode

function past(h, m, s) {
    return ((h * 3600) + (m * 60) + s) * 1000;
}