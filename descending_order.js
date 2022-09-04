function descendingOrder(n){
    return +String(n).split('').sort((a,b) => b-a).join('');
}
console.log(descendingOrder((0)))          //0
console.log(descendingOrder((453489)))      //985443