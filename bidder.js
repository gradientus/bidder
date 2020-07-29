'use strict';

const randomNumbers = (bids) => {
  const bidArray = [];
  for(let i = 0; i < bids; i++) {
    bidArray.push(Math.floor(Math.random() * 101))
  };

  return bidArray;
};

console.log(randomNumbers(100)); // delete this line after testing


//find the highest bid
//find the mean average
//find the mode
//find the mean
//find the standard deviation
//eliminate any numbers greater than 1 standard deviation

//redo the mean, mode, median after the elimination
//present on a sloppy html page


// put in a linter