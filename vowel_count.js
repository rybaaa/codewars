function getCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let  count = 0;
    let arr = str.split('');
    for (let  i = 0; i < arr.length; i++) {    
        if (vowels.includes(arr[i])) {
          count++;
      }
    }
    return count;
  }
  
  console.log(getCount('abracadabra'))    //5 (vowels)