function findNextPower(val, pow_) {
    for (let i = 0; i < val; i++) {
        if (i ** pow_ > val) {
            return i ** pow_;
        }
    }
}
console.log(findNextPower(12, 2));   //16
console.log(findNextPower(10, 3));    //27
