function check(a, x) {
    return (a.indexOf(x) >= 0);
  }
console.log(check([1,2,3], 3));       //true
console.log(check([1,2,'true'], 3));    //false