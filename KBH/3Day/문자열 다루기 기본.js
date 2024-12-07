function solution(s) {
    const arraySplit = s.split("");
    answer = true;
    for(let i = 0; i < s.length; i++){
        if(!isNaN(arraySplit[i]) && (s.length === 4 || s.length ===6)){
            answer = true;
        }else {
            answer = false;
            break;
        }
    }
    return answer;
}