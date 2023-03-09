function kebabize(str) {
    str = str.replaceAll(/[0-9]/g, "")
    let result = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            result += '-' + str[i].toLowerCase()
        } else {
            result += str[i]
        }
    }
    return result[0]==='-'? result.slice(1): result
}

console.log(kebabize('camelsHaveThreeHumps'))  //"camels-have-three-humps"
console.log(kebabize('camelsHave3Humps'))      //"camels-have-humps"
console.log(kebabize('CAMEL'))                 //"c-a-m-e-l"

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"