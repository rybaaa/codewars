function isCoprime(x, y) {
    let x_arr = [];
    let y_arr = [];
    answer_arr = [];
    for (let i = 1; i <= x; i++) {
        if (x % i == 0) {
            x_arr.push(i);
        }
    }
    for (let i = 1; i <= y; i++) {
        if (y % i == 0) {
            y_arr.push(i);
        }
    }
    for (let i = 0; i < x_arr.length; i++) {
        if (y_arr.includes(x_arr[i])) {
            answer_arr.push(x_arr[i]);
        }         
    }
    return (Math.max(...answer_arr) == 1);
  }
console.log(isCoprime(12, 39))   //false 
console.log(isCoprime(20, 27))   //true