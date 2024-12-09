// #1 for문 사용 
function solution(absolutes, signs) {
    let sum = 0;
     
    for (let i = 0; i < signs.length; i++) {
        if (signs[i] === false) {    // false일 경우 음수로 바꾸기
            absolutes[i] = -absolutes[i];
        }
    } 

    absolutes.forEach((num) => (sum += num)); // 배열의 총합
    return sum;
}



// #2 reduce 사용
function solution(absolutes, signs) { 
    const sum = absolutes.reduce((acc, num, index) => {
        return acc + (signs[index] ? num : -num);   // signs가 true일 경우 양수, false일 경우 음수로 변환한 값을 누적한 총합 구하기
    }, 0); 

    return sum; 
}