function solution(n) {
    let sum = 0;
    let eachnum = n.toString(); //인덱스 사용을 위해 문자열로 변경
    
    for (let i = 0; i < eachnum.length; i++) {
        sum += Number(eachnum[i]); //숫자로 변환하여 합산
    }
    return sum;
}
