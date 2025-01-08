function solution(s) {
    let pCount = 0; 
    let yCount = 0; 

    for (let char of s) {
        if (char == 'p' || char == 'P') { 
            pCount++;
        } else if (char == 'y' || char == 'Y') { 
            yCount++;
        }
    }

    return pCount == yCount;
}