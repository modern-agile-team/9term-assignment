function solution(s) {
    const middleIdx = s.length / 2;
    let answer = '';
    
    if (s.length % 2 === 0) {
        answer = s[middleIdx-1] + s[middleIdx];
    } else {
        answer = s[Math.floor(middleIdx)];
    }

    return answer;
}