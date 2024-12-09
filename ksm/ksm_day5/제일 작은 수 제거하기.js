function solution(arr) {
    if (arr.length === 1) { // arr의 길이가 1일 경우, -1 반환
        return [-1]; 
    }
    
    const min = Math.min(...arr);   //arr의 최솟값
    return arr.filter((num) => num !== min); // arr의 값이 최소값이 아닌 것만 반환
}