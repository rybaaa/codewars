function solution(a, b){
    let answer = '';
    if (a.length > b.length) {
        answer = b + a + b;
    } else {
        answer = a + b + a;
    }
    return answer;
}
console.log(solution("45", "1"));    //1451
console.log(solution("code", "war"));    //warcodewar