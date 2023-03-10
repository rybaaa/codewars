function findEvenIndex(arr) {
    let [left_res,right_res]  = [0,0]
    for (let i = 0; i < arr.length; i++) {
        right_res = arr.slice(i).reduce((sum,acc)=>sum+acc)
        left_res = arr.slice(0, i+1).reduce((sum,acc)=>sum+acc)
        if(left_res===right_res) return i
    }
    return -1
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]))
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]))
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]))

//Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.
//
// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.
//
// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.