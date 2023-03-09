function decipherThis(str) {
    let arr = str.split(' ')
    for (let i = 0; i < arr.length; i++) {
        let j = 0
        let num = ''
        while (!isNaN(arr[i][j])) {
            num += arr[i][j]
            j++
        }
        arr[i] = arr[i].replace(num, String.fromCharCode(Number(num)))
        let last_word = 0
        let second_word = 0;
        if (arr[i].length !== 1) {
            for (let k = 0; k < arr[i].length; k++) {
                if (k === 1) {
                    second_word = arr[i][k]
                }
                if (k === arr[i].length - 1) {
                    last_word = arr[i][k]
                }
            }
            // arr[i] = arr[i].replace(arr[i][1], last_word).slice(0, -1) + second_word
            if (arr[i].length > 2) {
                arr[i] = arr[i][0] + last_word + arr[i].slice(2, -1) + second_word
            }
        }

    }
    return arr.join(' ')
}
console.log(decipherThis('72olle 103doo 100ya')); // 'Hello good day'
console.log(decipherThis('82yade 115te 103o')); // 'Ready set go'
console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')); // 'Have a go at this and see how you do'