function solution(numbers, hand) {
    const keypad = {
      1: [0, 3], 2: [1, 3], 3: [2, 3],
      4: [0, 2], 5: [1, 2], 6: [2, 2],
      7: [0, 1], 8: [1, 1], 9: [2, 1],
      '*': [0, 0], 0: [1, 0], '#': [2, 0],
    };
  
    const len = numbers.length;
    let result = '';
    let leftFinger = '*';
    let rightFinger = '#';
  
    for (let i = 0; i < len; i++) {
      const currentNumber = numbers[i];
  
      if (currentNumber % 3 === 1) {
        result += 'L';
        leftFinger = currentNumber;
      } else if (currentNumber !== 0 && currentNumber % 3 === 0) {
        result += 'R';
        rightFinger = currentNumber;
      } else {
        const chosenFinger = getCloserFinger(keypad, currentNumber, hand, leftFinger, rightFinger);
        result += chosenFinger;
        if (chosenFinger === 'L') {
          leftFinger = currentNumber;
        } else {
          rightFinger = currentNumber;
        }
      }
    }
  
    return result;
  }
  
  function getCloserFinger(keypad, targetNumber, hand, leftFinger, rightFinger) {
    const preferredHand = hand === 'left' ? 'L' : 'R';
    const leftDistance = Math.abs(keypad[targetNumber][0] - keypad[leftFinger][0]) +
                         Math.abs(keypad[targetNumber][1] - keypad[leftFinger][1]);
    const rightDistance = Math.abs(keypad[targetNumber][0] - keypad[rightFinger][0]) +
                          Math.abs(keypad[targetNumber][1] - keypad[rightFinger][1]);
  
    if (leftDistance === rightDistance) {
      return preferredHand;
    }
    return leftDistance < rightDistance ? 'L' : 'R';
  }