function order(words){
    if(!words) return ''
    let result = []
    let arr = words.split(' ')
    for(let i = 0; i< arr.length; i++){
        for(let j = 0; j<arr[i].length; j++){
            if(!isNaN(Number(arr[i][j]))){
                result[Number(arr[i][j])-1] = arr[i]
            }
        }
    }
    return result.join(' ')
}

// console.log(!isNaN(Number('a2sdf'[1])))

console.log(order("is2 Thi1s T4est 3a"))
console.log(order("4of Fo1r pe6ople g3ood th5e the2"))
console.log(order(""))

// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ''