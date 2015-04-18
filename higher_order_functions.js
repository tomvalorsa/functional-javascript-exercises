function repeat(operation, num) {
  if(num <= 0) {
    return;
  } else {
    operation();
    // N.B. The decrementation needs to happen before the varibale is passed in, not after.
    // i.e. --num instead of num--
    // This is because we need to send in num - 1 to actually get closer to the base case.
    return repeat(operation, --num);
  }
}

// Do not remove the line below
module.exports = repeat