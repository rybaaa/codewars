function lovefunc(flower1, flower2){
    return ((flower1 % 2 == 0 && flower2 % 2 != 0) || (flower1 % 2 != 0 && flower2 % 2 == 0));
  }
console.log(lovefunc(2,3));   //true
console.log(lovefunc(3,2));   //true
console.log(lovefunc(2,4));   //false