function createPhoneNumber(numbers){
    let firstpart = '(' + numbers.slice(0,3).join('') + ') ';
    let secondpart = numbers.slice(3,6).join('');
    let thirdpart = '-' + numbers.slice(6).join('')
    return firstpart + secondpart +thirdpart;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))    //(123) 456-7890
