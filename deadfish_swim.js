// Return the output array, and ignore all non-op characters   
//i increments the value (initially 0)
//d decrements the value
//s squares the value
//o outputs the value into the return array
//Invalid characters should be ignored.


function parse( data ) {
    let answer = 0;
    let answer_arr = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i] == 'i') {
            answer+=1;
        } else if (data[i] == 'd') {
            answer -= 1;
        } else if (data[i] == 's') {
            answer = answer ** 2;
        } else if (data[i] == 'o') {
            answer_arr.push(answer);
        } else {
            continue;
        }
    }
    return answer_arr;
}
console.log(parse("iiisxxxdoso"))     //(0+1+1+1)**2 +0+0+0-1=8=>to array=>  8**2=64=> to array