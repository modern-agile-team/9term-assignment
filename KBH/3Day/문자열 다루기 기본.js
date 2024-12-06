function solution(s) {
    let answer = true;
    let St = s.split("");
    for(let i = 0; i < s.length; i++){
        if(!isNaN(St[i]) && (s.length === 4 || s.length ===6)){
            answer = true;
        }else {
            answer = false;
            break;
        }
    }
    console.log(!isNaN(St[0]))
    return answer;
}