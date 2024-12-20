function solution(new_id) {
    const answer = new_id
        // #1. 소문자로 변환
        .toLowerCase()
        // #2. 허용되지 않는 문자 제거  
        .replace(/[^a-z0-9-_.]/g, '') 
        // #3. 연속된 마침표를 하나로 치환
        .replace(/\.+/g, '.') 
        // #4. 마침표가 맨앞이나 맨끝이면 제거
        .replace(/^\.|\.$/g, '') 
        // #5. 빈 문자열이라면, "a" 추가
        .replace(/^$/, 'a')
        // #6. 15자 이상은 제거 및 맨끝 마침표 제거 
        .slice(0, 15).replace(/\.$/, '')   
    
    // #7. 2자리 이하라면 3자리가 될 때까지 추가
    return answer.padEnd(3, answer[answer.length - 1]);   
}