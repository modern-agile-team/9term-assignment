function solution(s) {
    let answer = '';
    const middleIndex = s.length / 2;
    //2로 나누어서 짝수, 홀수 구분하기위한 상수 선언
    answer = (s.length % 2) === 0 ? s.substr(slice-1,2) : s.substr(slice ,1);
    return answer;
}