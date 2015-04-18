function doubleAll(numbers) {
  // .map takes a callback.
  // Pass in each array element and return the outcome of the block.
  var result = numbers.map(function(num) {
    return num * 2;
  });
  // Return the entire array of new values.
  return result;
}

module.exports = doubleAll