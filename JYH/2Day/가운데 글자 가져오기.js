function solution(s) {
    const math = s.length / 2;
    let answer = '';
    if(s.length % 2 === 0){
        answer = s[math-1] + s[math];
    }
    else {
        answer = s[Math.floor(math)];
    }
    return answer;
}