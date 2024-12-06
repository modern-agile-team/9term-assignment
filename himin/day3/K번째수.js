function solution(array, commands) {
    const kthNumber = [];
      
    for (let command of commands){
        const [i, j, k] = command;
        const sliceArray = array.slice(i - 1, j);
        const sortArray = sliceArray.sort( (a, b) => a - b);
        s.push(sortArray[k - 1]);
    }
      
    return kthNumber;
  }