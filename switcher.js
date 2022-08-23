function switcheroo(x){
    let newStr = '';
    for (let i = 0; i < x.length; i++) {
        if (x[i] == 'a') {
            newStr += 'b';
        }
        else if (x[i] == 'b') {
            newStr += 'a';
        } else {
            newStr += x[i];
        }
    }
    return newStr;
}
console.log(switcheroo('aabbcc'))   // 'bbaacc'
console.log('hello test')