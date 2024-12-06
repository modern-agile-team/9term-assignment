function solution(s) {
    let even = s.length % 2 === 0;
    
    if (even) {
        return s[s.length / 2 - 1]+s[s.length / 2];
    }
    return s[Math.floor(s.length / 2)];
}
