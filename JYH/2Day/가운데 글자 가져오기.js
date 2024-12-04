function solution(s) {
    const sootza = s.length / 2;
    let answer = '';
    if(s.length % 2 === 0){
        answer = s[sootza-1] + s[sootza];
    }
    else {
        answer = s[Math.floor(sootza)];
    }
    return answer;
}