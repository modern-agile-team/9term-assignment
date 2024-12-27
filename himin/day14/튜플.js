function solution(s) {
    // 1. 문자열 파싱
    const tuples = s
        .slice(2, -2) // "{{ }}" 제거
        .split("},{") // "},{" 기준으로 분리
        .map(group => group.split(",").map(Number)); // 숫자로 변환

    // 2. 집합 크기 순 정렬
    tuples.sort((a, b) => a.length - b.length);

    // 3. 마지막 요소 추출
    const result = [];
    tuples.forEach(group => {
        const lastElement = group.find(num => !result.includes(num)); // 새로운 요소 찾기
        result.push(lastElement);
    });

    return result;
}