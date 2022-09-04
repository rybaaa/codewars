function inAscOrder(arr) {
    for (let i = 1; i <= arr.length; i++) {
        if (arr[i-1] > arr[i]) {
            return false;
        } 
  }
}
console.log(inAscOrder([1,2,3]))