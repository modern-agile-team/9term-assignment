function solution(n, arr1, arr2) {
    let answer = [];
    
    for (let i = 0; i < n; i++) {
        let hint1 = arr1[i].toString(2).padStart(n, '0');
        let hint2 = arr2[i].toString(2).padStart(n, '0');
        
        let row = "";
        
        for (let j = 0; j < n; j++) {
            if (hint1[j] === '1' || hint2[j] === '1') {
                row += "#";
            } else {
                row += " ";
            }
        }
        answer.push(row);
    }
    return answer;
}