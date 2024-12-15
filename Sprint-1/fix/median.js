// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  const median = list.splice(middleIndex, 1)[0];
  return median;
}

module.exports = calculateMedian;

function calculateMedian(list) {
  // Sort the list in ascending order
  list.sort((a, b) => a - b);

  const middleIndex = Math.floor(list.length / 2);

  if (list.length % 2 === 0) {
    // If the list has an even number of elements, return the average of the two middle values
    return (list[middleIndex - 1] + list[middleIndex]) / 2;
  } else {
    // If the list has an odd number of elements, return the middle element
    return list[middleIndex];
  }
}

module.exports = calculateMedian;
