function findUniq(arr) {
    for (let i = 0; i< arr.length; i++){
        if(arr.lastIndexOf(arr[i])===arr.indexOf(arr[i])) return arr[i]
    }
}

// console.log(![1,2,3].slice(0,1).includes(1))
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]))
console.log(findUniq([ 0, 0, 1]))   //1

//findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55