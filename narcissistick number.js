function narcissistic(value) {
    let arr = value.toString().split('')
    return Number(arr.reduce((sum,acc)=>Number(sum) + Number(acc**arr.length), 0)) === value
}

console.log(narcissistic(153))
console.log(narcissistic(407))
console.log(narcissistic(1652))


//For example, take 153 (3 digits), which is narcissistic:
//
//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:
//
//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938