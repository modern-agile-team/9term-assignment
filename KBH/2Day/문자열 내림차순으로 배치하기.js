function solution(s) {
    let answer = "";
    let arry = s.split('').sort();
    //split함수로 각 문자들을 배열로 쪼개고
    //sort함수로 정렬시킴(오름차순)
    arry = arry.reverse();
    //reverse함수를 통해서 정렬시킨 배열을 내림차순으로 바꿈.
    for(let i = 0; i < s.length; i++){
        answer += arry[i];
        //각 배열의 요소값들을 answer에 저장
    }
    return answer;
}