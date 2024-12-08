function solution(lottos, win_nums) {
    const answer = [];
    let count = 0; // 조건이 맞을때마다 값을 증가시키기 위한 변수 선언
    let zeroCount = 0; // 인덱스 값 안에 0일 경우 담는 변수
    // lottosSet과 win_numSet 둘 다 같은 인덱스에 위치하기 위함
    for (let i = 0; i < lottos.length; i++){
        if (lottos[i] === 0){
            zeroCount += 1;
        } else if (win_nums.includes(lottos[i]))
            count += 1;
        } 
    const maxPlace = 7 - (count + zeroCount);
    const minPlace = 7 - count;
    answer.push(maxPlace > 6 ? 6 : maxPlace);
    answer.push(minPlace > 6 ? 6 : minPlace);
    return answer;
    }