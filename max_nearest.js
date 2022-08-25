function adjacentElementsProduct(array) {
    let multiple = array[0] * array[1];
    for (let i = 0; i < array.length; i++) {
      if (multiple < array[i] * array[i+1]) {
        multiple = array[i] * array[i+1]
      }
    }
    return multiple;
  }
  console.log(adjacentElementsProduct([1,2,3]));   //6
  console.log(adjacentElementsProduct([4,1,5]));    //5