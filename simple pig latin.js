function pigIt(str){
    let arr = str.split(' ')
    let punctuationless = /[.,\/#!?$%\^&\*;:{}=\-_`~()]/g
    for (let i = 0; i<arr.length; i++){
        if(!arr[i].match(punctuationless)){
            arr[i] = arr[i].slice(1)+arr[i][0]+'ay'
        }
    }
    return arr.join(' ')
}

console.log(pigIt('Pig latin is cool'))
console.log(pigIt('Hello world !'))
console.log(pigIt('Quis custodiet ipsos custodes ?'))   //uisQay ustodietcay psosiay ustodescay ?

//pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !