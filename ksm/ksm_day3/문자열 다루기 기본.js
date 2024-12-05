function solution(s) {
    
    return (s.length==4 || s.length==6) && /^[0-9]*$/.test(s);
} 
    //문자열 길이 확인 4또는 6인지
    //숫자로만 구성되었는지 확인