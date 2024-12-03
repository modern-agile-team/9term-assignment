function solution(s){
    const lower = s.toLowerCase();

    return lower.split('p').length === lower.split('y').length;
}

console.log(solution('pPypYyoopy'))