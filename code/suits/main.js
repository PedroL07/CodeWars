// Description 
// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// My Code 
function defineSuit(card) {
    // good luck
  
  if (card.includes('♣')) return 'clubs'; 
   if (card.includes('♠')) return 'spades';
   if (card.includes('♥')) return 'hearts';
   if (card.includes('♦')) return 'diamonds';
      
  }



// clever clode
function defineSuit(card) {
    const s = {
      "♣": "clubs",
      "♠": "spades",
      "♦": "diamonds",
      "♥": "hearts"
    }
    return s[card.charAt(card.length - 1)]
  }
