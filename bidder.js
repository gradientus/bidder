'use strict';

//This runs all the functions and generates the random numbers in the array.
const randomNumbers = (bids) => {
  const bidArray = [];
  for(let i = 0; i < bids; i++) {
    bidArray.push(Math.floor((Math.random() * bids) + 1))
  };

  findAvg(bidArray, bids);
  median(bidArray);
  mode(bidArray);
  getStandardDeviation(bidArray);

  console.log(`Highest bid: ${Math.max(...bidArray)}`);
  console.log(`Lowest bid: ${Math.min(...bidArray)}`);
  return bidArray;
};

//This provides a mean average
const findAvg = (bidArray, bids) => {
  let total = 0;
  let avg = 0;

  for(let i = 0; i < bids; i++) {
    total += bidArray[i];
  }
  avg = parseFloat((total / bids).toFixed(2));

  console.log(`Mean average: ${avg}`);
  return avg;
};


var mode = (bidArray) => {
  let numMapping = {};
  let greatestFreq = 0;
  let mode = 0;
  bidArray.forEach(function findMode(number) {
      numMapping[number] = (numMapping[number] || 0) + 1;

      if (greatestFreq < numMapping[number]) {
          greatestFreq = numMapping[number];
          mode = number;
      }
  });

  console.log(`Mode: ${mode}`);
  return +mode;
}


const median = bidArray => {
  const mid = Math.floor(bidArray.length / 2), nums = [...bidArray].sort((a, b) => a - b);
  const med = Array.length % 2 !== 0 ? nums[mid] : (nums[mid - a] + nums[mid]) / 2
  console.log(`Median: ${med}`);
  return med;
};



function getStandardDeviation(bidArray) {
  const n = bidArray.length;
  const mean = parseFloat(bidArray.reduce((a, b) => a + b) / n).toFixed(2);
  let stddev = Math.sqrt(bidArray.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n);
  console.log(`Standard deviation: ${stddev}`);
  return stddev;
}

randomNumbers(87);

//eliminate any numbers greater than 1 standard deviation

// put in a linter