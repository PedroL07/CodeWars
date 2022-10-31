// Description 

// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR". 


// My Code 

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){ 
  
    currentDate = new Date(currentDate);
     expirationDate = new Date(expirationDate);
     if (enteredCode === correctCode && currentDate <= expirationDate) {
       return true;
     } else {
       return false;
     }
   }
   
// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.



// Thoughts 

// Difficult - but learned that the Date() object assigns a value that is represented in milliseconds that i can use to compare to date in cluding time if it is given.




// clever clode

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
  }