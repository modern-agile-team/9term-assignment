function solution(d, budget) {
    let total = 0;
    let count = 0;
    const sortedD = [...d].sort((a, b) => a - b); // 오름차순 정렬 
   
    for (let i = 0; i < sortedD.length; i++) {
        if ((total + sortedD[i]) <= budget) { // 현재 부서를 포함해도 예산을 초과하지 않으면
            total += sortedD[i];              // 신청금액 추가
            count++;                          // 지원이 가능한 부서의 수 증가
        } else {
            break;                            // 예산 초과 시 반복 종료
        } 
    }

    return count;  // 최대로 지원가능한 부서의 수  
}