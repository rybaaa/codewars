function digitize(n) {    
    n = String(n);
    let arr = [];
    for (let i =0; i < n.length; i++) {
        arr.push(+n[i]);
    }
    return (arr.reverse());
  }
console.log(digitize(18459));    //[ 9, 5, 4, 8, 1 ]