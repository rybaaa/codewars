function arrayDiff(a, b) {
    let new_arr=[];
    for (let i = 0; i<a.length; i++) {
        if (b.includes(a[i])) {
        } else {
            new_arr.push(a[i]);
        }
    }
    return new_arr;
}
console.log(arrayDiff([1,2,2,2,3],[2]))     //[ 1, 3 ]