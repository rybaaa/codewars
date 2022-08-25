function maxMultiple(divisor, bound){
    while (bound % divisor != 0) {
      bound--;
    }
    return bound;
  }
  console.log(maxMultiple(2,7));    //6
  console.log(maxMultiple(7,17));    //14