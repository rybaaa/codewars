function squareDigits(num){
    let str = '';
    for (i = 0; i < String(num).length; i++) {
        let new_num = String(num)[i] ** 2;
        str+=new_num;
    }
    return +str;
}
console.log(squareDigits(8112));   //64114