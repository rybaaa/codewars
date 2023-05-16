/*
 * Pyramid of numbers is given, where the lower row is one number more than the higher one
 * Find the maximum sum which you can get from top to floor
 * Allowed steps - down right and down left
 *
 * Example:
 *
 *     3
 *    4 1
 *   8 1 3
 *  5 2 4 3
 * 1 8 4 7 4
 *
 */
let triangle = [  [3],[4, 1],[8, 1, 100],[10, 2, 5,1000] ];


//function sum doesn't work correctly at 100%!
function sum(arr){
    let result = 0;
    let index;
    let max;
    for(let i = 0; i< arr.length; i++){
        console.log(result)
        if(i!==0){
            max = Math.max(...arr[i].slice(index, index+1))
            index = arr[i].indexOf(max)
            result += max
        } else {
            max = arr[i][0]
            index = 0
            result+=max
        }
    }
    return result
}
console.log((sum(triangle)));

function sum_with_recursion(arr,i, j, len){
    if(i===len-1){
        return arr[i][j]
    }
    return arr[i][j]+Math.max(sum_with_recursion(arr,i+1, j, len),
        sum_with_recursion(arr,i+1, j+1, len)
    )
}
console.log((sum_with_recursion(triangle, 0, 0, 4)));