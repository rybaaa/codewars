const binaryArrayToNumber = arr => {
    let binary_str = '';
    for (let i = 0; i < arr.length; i++) {
        binary_str += arr[i];
    }
    return parseInt(binary_str,2);
  };
console.log(binaryArrayToNumber([0,0,1,0])) //2