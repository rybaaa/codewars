function nbDig(n, d) {
    let count = 0;
    let arr=[];
    for (let i = 0; i <= n; i++) {
      arr.push(i**2);
    }
    let new_str = [];
    for (let i = 0; i < arr.length; i++) {
      new_str+=arr[i];
    }
    for (let i = 0; i < new_str.length; i++) {
      if (new_str[i] == d) {
        count++;
      }
    }
    return count;
  }
  console.log(nbDig(10,1));    //4 