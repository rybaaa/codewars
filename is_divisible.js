function isDivisible(n, x, y) {
    if (n % x == 0 && n % y == 0) {
      return true;
    } else {
      return false;
    }
  }
console.log(isDivisible(5, 1, 5));  // 5/1= 5, 5/5=1 --> true 