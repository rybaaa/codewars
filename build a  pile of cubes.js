function findNb(m) {
    let [x,res,count] = [1,0,0]
    while (res<m){
        res+=x**3
        x++
        count++
    }
    return res === m? count: -1
}

console.log(findNb(1071225)) //45
console.log(findNb(91716553919377)) //-1