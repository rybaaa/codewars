function likes(names) {
    let count = names.length;
    if (count == 0) {
        return 'no one likes this';
    }
    if (count == 1) {
        return names[0] + ' likes this';
    }
    if (count == 2) {
        return (names[0] + ' and ' + names[count-1] + ' like this');
    }
    if (count == 3) {
        return (names[0] +', ' + names[count-2] + ' and ' + names[count-1] + ' like this');
    } else {
        return (names[0] + ', ' + names[1] + ' and ' + (count-2) + ' others like this');
    }
}
console.log(likes(['jack',]))
console.log(likes(['jack','pete']))
console.log(likes(['jack','pete','ben']))
console.log(likes(['jack','pete','ben', 'rob']))
console.log(likes(['jack','pete','ben', 'rob', 'alberto']))

//jack likes this
// jack and pete like this
// jack, pete and ben like this
// jack, pete and 2 others like this
//jack, pete and 3 others like this
