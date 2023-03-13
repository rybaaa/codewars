//return the total number of smiling faces in the array
function countSmileys(arr) {
    let res = 0
    let regex = /[:;][-~]?[)D]/g
    for (let i = 0; i< arr.length; i++){
        if(arr[i].match(regex)){
            res++
        }
    }
    return res
}

console.log(countSmileys([':)', ';(', ';}', ':-D']));       // should return 2;
console.log(countSmileys([';D', ':-(', ':-)', ';~)']));     // should return 3;
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); // should return 1;