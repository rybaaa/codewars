function createMessage(str) {
    return function (newStr){
        if(!newStr) return str
        return createMessage(str+' ' +newStr)
    }
}

console.log(createMessage("Hello")("World!")("how")("are")("you?")())  //Hello World! how are you?
