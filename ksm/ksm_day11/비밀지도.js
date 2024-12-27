function solution(n, arr1, arr2) {
    const result = [];

    // arr1과 arr2의 각 숫자를 길이 n의 이진수 문자열로 변환
    const binaryMap1 = arr1.map(num => num.toString(2).padStart(n), '0'); 
    const binaryMap2 = arr2.map(num => num.toString(2).padStart(n), '0');

    // 두 지도를 합친 최종 지도 생성
    for (let i = 0; i < n; i++) { 
        let temp = ''; // 현재 행의 지도를 저장할 변수
        for (let j = 0; j < n; j++) { 
            // 해당 위치가 두 지도에서 하나라도 1이면 벽(#), 그렇지 않으면 공백( )
            temp += (binaryMap1[i][j] === '1' || binaryMap2[i][j] === '1') ? '#' : ' '; 
        }
        result.push(temp);  // 완성된 행을 result 배열에 추가
    }

    return result;  // 최종 지도 반환
}