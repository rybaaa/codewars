function findNextSquare(sq) {
    if (Number.isInteger(sq**0.5) == false) {
      return -1;
    } else {
      return ((sq**0.5)+1)**2;
    }
  }
console.log(findNextSquare(121));   //144
console.log(findNextSquare(81));    //100