function solution(numbers) {
    let result = [];
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) { 
            result.push(numbers[i] + numbers[j]); // 두 수를 더한 값을 배열로 만들기
        }  
    }
    const uniqueArray = [...new Set(result)]; // 중복제거
    return uniqueArray.sort((a, b) => (a - b)); // 오름차순 정렬
}