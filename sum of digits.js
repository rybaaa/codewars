function digitalRoot(n) {
    let arr = n.toString().split('')
    let sum = 0
    while(arr.length>1){
        sum = arr.reduce((sum,curr)=>sum+ +curr,0)
        arr = sum.toString().split('')
    }
    return sum
}

console.log(digitalRoot(16))
console.log(digitalRoot(942))

//    16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
