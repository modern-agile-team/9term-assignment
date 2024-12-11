/*
 * absolutes에 절댓값을 입력 받고, signs을 통해 부호를 확인하여
 * 모두 더하는 함수입니다.
 * solution([4,7,12], [true,false,true]) // 4 - 7 + 12 // 9
 * solution([1,2,3], [false,false,true]) // - 1 - 2 + 3 //0
 */
function solution(absolutes, signs) {
  // reduce를 이용한 방법
  return absolutes.reduce((accumulator, current, index) => {
    // signs 배열의 값에 따라 현재 값을 양수 또는 음수로 변환합니다.
    return accumulator + (signs[index] ? current : -current);
  }, 0);
}

/*
function solution(absolutes, signs) { // for문을 이용한 방법
    let sum = 0;
    
    for (let i = 0; i < absolutes.length; i ++){
        if (signs[i]){ // sings이 음수일 떄
            sum += absolutes[i];
        } else { //signs이 양수일ㄷ 때
            sum -= absolutes[i];
        }
    }
    return sum;
    
}
*/
