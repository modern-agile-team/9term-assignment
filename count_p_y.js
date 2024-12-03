function solution(s) {
  let countP = 0,
    countY = 0;
  let lowerS = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (lowerS[i] == "p") {
      countP++;
    } else if (lowerS[i] == "y") {
      countY++;
    }
  }
  if (countP === countY) {
    return true;
  } else {
    return false;
  }
}
