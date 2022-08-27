function maxTriSum(numbers){
    function notin(num,arr) {
      while (arr.includes(num)) {
        let index = arr.indexOf(num);
        numbers.splice(index,1)
      return num;
      }
    }
    let max1 = Math.max.apply(null, numbers);
    let ind = numbers.indexOf(max1);
    numbers.splice(ind,1);
    notin(max1, numbers);
    let max2 = Math.max.apply(null, numbers);
    ind = numbers.indexOf(max2);
    numbers.splice(ind,1);
    notin(max2, numbers);
    let max3 = Math.max.apply(null, numbers);
    ind = numbers.indexOf(max3);
    numbers.splice(ind,1);
    notin(max3, numbers);
    
    return max1+max2+max3;
  }
  
  console.log(maxTriSum([1,2,3,3,4,4]))    //4+3+2=9