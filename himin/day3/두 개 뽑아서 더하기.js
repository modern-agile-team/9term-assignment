function solution(numbers) {
    const sum = new Set();
  
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length ; j++) {
         sum.add(numbers[i] + numbers[j]);   
        }
    }
      
      return [...sum].sort( (a, b) => a - b) ;
  }