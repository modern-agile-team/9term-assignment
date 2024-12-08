function solution(s) {
    const characters = s.split("");
    
    let answer = true;

    for (let i = 0; i < s.length; i++) {
        if (!isNaN(characters[i]) && (s.length === 4 || s.length ===6)) {
            answer = true;
        } else {
            answer = false;
            break;
        }
    }

    return answer;
}