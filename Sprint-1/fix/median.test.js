// median.test.js

// Someone has implemented calculateMedian but it isn't
// passing all the tests...
// Fix the implementation of calculateMedian so it passes all tests


function calculateMedian(list) {
  // Create a copy of the list to avoid modifying the original array
  const sortedList = [...list].sort((a, b) => a - b);

  const middleIndex = Math.floor(sortedList.length / 2);

  if (sortedList.length % 2 === 0) {
    // If the list has an even number of elements, return the average of the two middle values
    return (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2;
  } else {
    // If the list has an odd number of elements, return the middle element
    return sortedList[middleIndex];
  }
}

module.exports = calculateMedian;


