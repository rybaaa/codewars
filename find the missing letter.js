function findMissingLetter(array) {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    let alphabet = alpha.map((x) => String.fromCharCode(x));
    alphabet = alphabet.slice(alphabet.findIndex((el)=>el === array[0].toUpperCase()))
    for (let i = 0; i<array.length; i++){
        if(array[i].toUpperCase()!==alphabet[i]){
            return array[i] === array[i].toUpperCase()? alphabet[i]: alphabet[i].toLowerCase()
        }
    }
}

console.log(findMissingLetter(['a','b','c','d','f']))
console.log(findMissingLetter(['O','Q','R','S']))

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'