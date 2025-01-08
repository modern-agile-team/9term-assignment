/*
 * 자기의 로또번호와 실제 당첨 번호를 맞추어 확인하는 함수입니다.
 * 그러나 지워져서 안 보이는 번호는 0으로 저장하고, 최소와 최대를
 * 맞추어봅니다. (배열의 순서는 상관없습니다.)
 * solution([44, 1, 0, 0, 31, 25],[31, 10, 45, 1, 6, 19]) // [3, 5]  -> 3등 5등
 * solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]) // [1, 6] -> 1등 6등
 * solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]) // [1, 1] -> 1등 1등
 */
function solution(lottos, win_nums) {
  let mathCount = 0; // 일치하는 번호의 개수를 저장하는 변수를 선언합니다.
  let zeroCount = 0; // 0의 개수를 저장하는 변수를 선언합니다.

  // lottos 배열을 순회하며 일치하는 번호와 0의 개수를 셉니다.
  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] === 0) {
      zeroCount++; // 0이면 카운트 증가
    } else {
      for (let j = 0; j < win_nums.length; j++) {
        if (lottos[i] === win_nums[j]) {
          mathCount++; // 일치하는 번호가 있으면 카운트 증가
        }
      }
    }
  }

  // 최고 순위와 최저 순위를 계산합니다.
  let highestRank, lowestRank;

  // 최고 순위 계산
  const totalMatches = mathCount + zeroCount;
  if (totalMatches === 6) highestRank = 1;
  else if (totalMatches === 5) highestRank = 2;
  else if (totalMatches === 4) highestRank = 3;
  else if (totalMatches === 3) highestRank = 4;
  else if (totalMatches === 2) highestRank = 5;
  else highestRank = 6; // 그 외는 낙첨

  // 최저 순위 계산
  if (mathCount === 6) lowestRank = 1;
  else if (mathCount === 5) lowestRank = 2;
  else if (mathCount === 4) lowestRank = 3;
  else if (mathCount === 3) lowestRank = 4;
  else if (mathCount === 2) lowestRank = 5;
  else lowestRank = 6; // 그 외는 낙첨

  return [highestRank, lowestRank];
}
