function solution(s) {
    var answer = [];
    let s1 = s.replaceAll('{','[').replaceAll('}',']') 
    let sets = JSON.parse(s1) //문자열 배열로 변환
    let sorts1 = sets.sort((a, b) => a.length - b.length);
    let beforeArr = []; 
for (let i = 0; i < sorts1.length; i++) { 
    const item = sorts1[i]; 
    const pushItem = item.filter(x => !beforeArr.includes(x)).join(); 
    answer.push(+pushItem); 
    beforeArr = item; 
}
    return answer;
}