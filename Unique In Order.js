const uniqueInOrder = function (iterable) {
    if (typeof iterable === 'string') return isIterable(iterable.split(''))
    else return isIterable(iterable)

    function isIterable(arr) {
        let result = []
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== arr[i + 1]) {
                result.push(arr[i])
            }
        }
        return result
    }
}

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]