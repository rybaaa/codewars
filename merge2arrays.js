function mergeArrays(arr1, arr2) {
    function compareNumeric(a, b) {
      if (a > b) return 1;
      if (a == b) return 0;
      if (a < b) return -1;
    }
    let concat_arr = arr1.concat(arr2);
    let myArr = concat_arr.sort(compareNumeric);
    let  new_arr = [];
    for (let i = 0; i < myArr.length; i++) {
      if (myArr[i] != myArr[i+1]) {
        new_arr.push(myArr[i]);
      }
    }
    return new_arr;
  }
  console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]))   //[1, 2,  3,  4,  5, 7, 9, 10, 11, 12]
  