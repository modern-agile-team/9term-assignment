function solution(a, b) {
    let answer = 0;
    if (a <= b) {
        for (a; a <= b; a++) {
            answer += a;
        }
    }
    else if (a >= b) {
        for (b; b <= a; b++){
            answer += b;
        }
    }

    return answer;
}