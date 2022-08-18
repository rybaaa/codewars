let arr = ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']
function sumMix(x){
  let sum = 0;
  for (let i=0; i < x.length; i++) {
    sum += +x[i];
}
  return sum;
}
console.log(sumMix(arr));
