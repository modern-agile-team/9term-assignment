function solution(n){
    let answer = 0;
    let sootza = String(n)
    
    for (let i = 0; i < sootza.length; i++) {
        answer += Number(sootza[i])
    }
    return answer;
}