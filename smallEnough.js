function smallEnough(a, limit){
    function isSmall (element, index, array) {
        return element <= limit;
    }
    return a.every(isSmall);
}   

console.log(smallEnough([1,2,3,4], 5))    //true
console.log(smallEnough([1,2,10,4], 5))    //false
