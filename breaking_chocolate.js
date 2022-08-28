function breakChocolate(n,m) {
    if ((n == 0) || (m == 0)) {
        return 0;
    } else {
        return n*m-1;
    }

    }

console.log(breakChocolate(0,5))  //0
console.log(breakChocolate(4,5))   //19