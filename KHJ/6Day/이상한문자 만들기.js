function solution(s) {
    let answer = []; 
    const words = s.split(' '); 
    for (let i = 0; i < words.length; i++) {
        let transformedWord = ''; 
        let letterCount = 0; 
        for (let j = 0; j < words[i].length; j++) {
            const char = words[i][j]; 
             if (/[a-zA-Z]/.test(char)) { //현재 문자가 알파벳인지 확인
                // 정규 표현식 /[a-zA-Z]/를 사용하여 대문자와 소문자를 모두 포함
                letterCount++; // 알파벳 문자가 발견되면 letterCount에 1증가시킴
                if (letterCount % 2 === 1) {
                    transformedWord += char.toUpperCase();  
                } else {
                    transformedWord += char.toLowerCase(); 
                }
            } else {
                transformedWord += char; //알파벳이 아니면 그대로 transformeWorld에 추가
            }
        }
    }
    return answer.join(' '); 
}
