function solution(n) {
    let sum = 0;
    let eachnum = n.toString();
    
     for (let i = 0; i < eachnum.length; i++) {
         sum += Number(eachnum[i]);
     }
    return sum;
}
