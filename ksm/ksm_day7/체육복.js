function solution(n, lost, reserve) {
    const newLost = lost.filter(cloth => !reserve.includes(cloth)); // lost와 reserve 중복 번호 제거
    const newReserve = reserve.filter(cloth => !lost.includes(cloth)); // reserve와 lost 중복 번호 제거
  
    newLost.sort((a, b) => a - b); 
    newReserve.sort((a, b) => a - b);
    
    let count = n - newLost.length; // 체육복을 잃어버리지 않은 사람 수
    
    for (let i = 0; i < newLost.length; i++) {
        for (let j = 0; j < newReserve.length; j++) {
            if (newLost[i] === newReserve[j] - 1 || newLost[i] === newReserve[j] + 1) { // 여분 체육복이 있는 번호의 앞, 뒷 번호 사람에게 빌려줌
                count++;  // 체육복이 있는 사람 수
                newReserve.splice(j, 1); // 체육복을 빌려준 학생 제거
                break;
            }
        }
    }
    return count;
}


