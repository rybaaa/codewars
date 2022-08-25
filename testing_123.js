var number=function(array){
    let arr1 = [];
    for (let i =0; i < array.length; i++) {
      arr1.push((i+1) + ': ' + array[i]);
    }
    return arr1;
  }
  console.log(number(['a','b','c']))   //[ '1: a', '2: b', '3: c' ]