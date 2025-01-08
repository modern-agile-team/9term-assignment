function solution(n){
    let answer = 0;
    const numberToString = String(n)
    
    for (let i = 0; i < numberToString.length; i++) {
        answer += Number(numberToString[i])
    }
    return answer;
}