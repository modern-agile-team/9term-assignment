function solution(s) {
    const words = s.split(' ');                 // 문자열을 공백 기준으로 분리하여 배열로 반환
    const newWords = words.map((word) => {   
        let temp = "";                          // 변환된 단어를 저장할 변수
        
        for (let i = 0; i < word.length; i++) {
            temp += i % 2 === 0 ? word[i].toUpperCase() : word[i].toLowerCase();    // 짝수 인덱스면 대문자, 홀수이면 소문자로 변환
        }
        return temp;           // 변환된 단어 반환
    });
    return newWords.join(' ');  // 변환된 단어를 공백을 넣어 합치기
}





