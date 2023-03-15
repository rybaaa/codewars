function zero(foo) {
    return foo? foo(0) : 0
}

function one(foo) {
    return foo? foo(1) : 1
}

function two(foo) {
    return foo? foo(2) : 2
}

function three(foo) {
    return foo? foo(3) : 3
}

function four(foo) {
    return foo? foo(4) : 4
}

function five(foo) {
    return foo? foo(5) : 5
}

function six(foo) {
    return foo? foo(6) : 6
}

function seven(foo) {
    return foo? foo(7) : 7
}

function eight(foo) {
    return foo? foo(8) : 8
}

function nine(foo) {
    return foo? foo(9) : 9
}

function plus(b) {
    return function (a){
        return a+b
    }
}

function minus(b) {
    return function (a){
        return a-b
    }
}

function times(b) {
    return function (a){
        return a*b
    }
}

function dividedBy(b) {
    return function (a){
        return Math.floor(a/b)
    }
}

console.log(one(plus(one())))     //2
console.log(three(minus(one())))    //2
console.log(four(times(five())))    //20