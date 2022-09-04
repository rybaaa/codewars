function spinWords(string){
    let arr = string.split(' ');
    let new_str = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= 5) {
            let reversed_word = arr[i].split('').reverse().join('');
            new_str += reversed_word + ' ';
        } else {
            new_str += arr[i]+ ' ';
        }
    }
    return new_str.slice(0, new_str.length-1);
}
console.log(spinWords("Hello world and me"))  //olleH dlrow and me