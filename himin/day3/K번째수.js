function solution(array, commands) {
    let s = [];
      
    for (let command of commands){
        const [i, j, k] = command;
        let sliceArray = array.slice(i - 1, j);
        let sortArray = sliceArray.sort( (a, b) => a - b);
        s.push(sortArray[k - 1]);
    }
      
    return s;
  }