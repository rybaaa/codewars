function persistence(num) {
    if (num < 10) return 0
    let arr = num.toString().split('')
    let res = arr.reduce((sum,acc)=>sum*acc)
    let count = 0
    while(arr.length>1){
        count++
        arr = res.toString().split('')
        res = arr.reduce((sum,acc)=>sum*acc)
    }
    return count
}

console.log(persistence(39))    //3
console.log(persistence(999))   //4
console.log(persistence(4))     //0

//39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)