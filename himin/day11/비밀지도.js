function solution(n, arr1, arr2) {
    const result = [];
    
    for (let i = 0; i < n; i++) {
      // 비트 OR 연산 후 이진수 문자열로 변환
      const binary = (arr1[i] | arr2[i]).toString(2).padStart(n, '0');
      
      // 이진수 문자열에서 1 -> '#', 0 -> ' ' 변환
      const row = binary.replace(/1/g, '#').replace(/0/g, ' ');
      
      result.push(row);
    }
    
    return result;
  }