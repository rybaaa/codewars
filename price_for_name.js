function billboard(name, price = 30){
    let count = 0;
    let realPrice = 0;
    while (count < name.length) {
        realPrice += price;
        count++;
    }
    return realPrice;
} 
console.log(billboard('code wars', 10));    //90