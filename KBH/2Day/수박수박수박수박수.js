function solution(n) {
    let answer = ""; // 반환에 필요한 변수 선언
    for(let i = 1; i<=n; i++){ 
    // i의 값을 1로 설정해 처음에 저장받는 값이 "수"일 수 있도록 반복문 선언
        const condi = (i%2) === 1 ? "수" : "박";
    //i의 값이 홀수 인 경우 수 짝수인 경우 박으로 값을 저장.
        answer = answer + condi;
    }
    return answer;
}