function solution(s) {
    const middleIndexS = Math.floor(s.length / 2);
    let middleChar = "";
      
    if (s.length % 2 === 1) {
        middleChar = s[middleIndexS];
    } else {
        middleChar = s[middleIndexS - 1] + s[middleIndexS];
    }
      
    return middleChar;
}