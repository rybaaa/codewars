function highAndLow(numbers){
  let arr = numbers.split(' ');
  return Math.max.apply(null, arr) + ' ' + Math.min.apply(null, arr);
}
console.log(highAndLow("1 2 3 4 5"))   // 5 1