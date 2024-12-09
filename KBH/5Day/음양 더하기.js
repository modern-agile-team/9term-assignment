function solution(absolutes, signs) {
    // reduce를 이용
    const answer = absolutes.reduce(
        (sum, number, index) => {
            if (signs[index] === false) {
                return sum - number;
            } else{
                return sum + number;
        }
    }, 0);
    
    return answer;
}
// for문을 이용
// const answer = [];
// for (let i = 0; i < absolutes.length; i++) {
//         if (signs[i] === true) {
//             answer.push((+ absolutes[i]));
//         } else {
//             answer.push((- absolutes[i]));
//         }
//     }
//     console.log(answer);