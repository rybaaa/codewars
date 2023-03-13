function high(x){
    let arr = x.split(' ')
    let [tempRes, tempCount] = ['', 0]
    for(let i =0; i<arr.length; i++){
        let temp = arr[i].split('').reduce((sum, curr)=>sum+curr.charCodeAt(0)-96,0)
        if(tempCount<temp){
            tempRes = arr[i]
            tempCount = temp
        }
    }
    return tempRes
}

console.log(high('man i need a taxi up to ubud'))  //taxi
console.log(high('what time are we climbing up the volcano'))  //volcano

//Given a string of words, you need to find the highest scoring word.
//
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
//
// For example, the score of abad is 8 (1 + 2 + 1 + 4).