'use strict';

const randomNumbers = (bids) => {
  const bidArray = [];
  for(let i = 0; i < bids; i++) {
    bidArray.push(Math.floor(Math.random() * 101))
  };

  return bidArray;
};

console.log(randomNumbers(100)); // delete this line after testing



// put in a linter