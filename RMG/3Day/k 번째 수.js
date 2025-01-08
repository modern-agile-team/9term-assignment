/*
 * array의 배열에서 [i, j, k]를 원소로 가진 2차원 배열 command가 매개변수로 주어질 때
 * i부터 j까지 자른 후(인덱스값 아님) 오름차순으로 정리한 후 k번째 수를 뽑는 함수입니다.
 * solution([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]] // [5, 6, 3]
 */

function solution(array, commands) {
  let newArr = []; // slice후의 값을 담기 위한 빈 배열을 선언합니다.
  let answerArr = []; // k번째의 수를 담기위한 빈 배열을 선언합니다.

  for (let i = 0; i < commands.length; i++) {
    // command수에 맞게 뽑아야하므로 .length를 이용하여 for문을 선언합니다.
    let start = commands[i][0] - 1; // slice() 메소드의 동작 방식은 인덱스 값이 [(start < end)] = index[start] index[end-1] 가 됩니다.
    let end = commands[i][1]; // 위에와 마찬가지로 [(start < end)] 이므로 그대로 지정해주었습니다.
    let k = commands[i][2]; // k번째 수를 뽑기위하여 선언하였습니다.
    newArr = array.slice(start, end); //배열의 slice()함수를 이용하였습니다.
    newArr.sort((a, b) => a - b); // 자른 배열을 오름찰순으로 정리하였습니다.
    answerArr.push(newArr[k - 1]); // 초기화가 되지 않고 누적이 되도록, push()를 이용하였습니다.
  }

  return answerArr;
}
