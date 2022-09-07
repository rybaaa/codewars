function findOutlier(integers){
    let odd_arr = integers.filter(x => x%2 != 0);
    let even_arr = integers.filter(x => x%2 == 0);
    if (odd_arr.length == 1) {
        return odd_arr[0];
    } else {
        return even_arr[0];
    }
}
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))    //11
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))    //160