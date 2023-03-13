function solution(str){
    if(!str) return []
    let res = []
    while(str.length>=1){
        res.push(str.slice(0,2))
        if(res[res.length-1].length===1){
            res[res.length-1]+='_'
        }
        str = str.slice(2)
    }
    return res
}

console.log(solution('abc'))
console.log(solution('abcdef'))

//* 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']