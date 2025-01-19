function solution(s) {
    // 문자열에서 숫자만 추출하여 숫자 배열 생성
    const regex = /\d+/g; 
    const matches = s.match(regex).map(Number); 

    // 숫자 배열을 빈도 수 기준으로 정렬
    const sortedArr = getSortedArr(matches);

    return sortedArr;    
}

// 배열을 빈도 수 기준으로 내림차순 정렬하는 함수
function getSortedArr(array) {
    const counts = {}; // 각 숫자의 빈도를 저장할 객체
    
    // 각 숫자의 빈도 계산
    array.forEach(num => {
        counts[num] = (counts[num] || 0) + 1; 
    });
    
    // counts 객체의 키(문자열 형태)를 가져옴.
    const result =  Object.keys(counts)  
        // 값(빈도 수)을 비교하여 내림차순 정렬
        .sort((a, b) => counts[b] - counts[a])
        // 정렬된 키를 숫자 형태로 변환
        .map(Number); 
        
    return result; 
}

