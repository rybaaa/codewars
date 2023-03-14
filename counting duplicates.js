function duplicateCount(text) {
    let result = 0
    text = text.toLowerCase()
    for (let i = 0; i < text.length; i++) {
        if(text.indexOf(text[i]) !== text.lastIndexOf(text[i])){
            result++
            text = text.replaceAll(text[i], '')
            i=0
        }
    }
    return result
}

console.log(duplicateCount('abcde'))
console.log(duplicateCount('aabbcde'))
console.log(duplicateCount('aabBcde'))
console.log(duplicateCount('aA11'))
console.log(duplicateCount('abcdefghabcdABCABA'))

//"abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice