function roundToNext5(n){
    if (n % 5 != 0){
      while (n % 5 != 0) {
        n++;
      }
      return n;
    } else {
      return n;
    }
}
console.log(roundToNext5(3));    // return 5
console.log(roundToNext5(-2));     // return 0