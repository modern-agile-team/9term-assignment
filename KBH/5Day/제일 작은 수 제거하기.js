function solution(arr) {
    const minValue = Math.min(...arr);
    //최솟값을 구하기 위한 변수
    
    const filteredArray = arr.filter((element) => element !== minValue); 
    //최솟값과 비교해 최솟값이 아니면 filteredArray에 넣음.
    
    let answer = [];
    
    if (filteredArray[0] === undefined) {
        answer.push(-1);
        // [] = undefined이기 때문에 answer에 -1를 push함
    } else {
        answer = filteredArray;
        // 조건이 거짓이면 filter함수에서 거른 값들을 answer에 할당
    }
    
    return answer;
}