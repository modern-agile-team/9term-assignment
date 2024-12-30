function solution(n, arr1, arr2) {
    
    let array = [];
    const answer = [];

    for (let i = 0; i < n; i++) {

        array[i] = arr1[i] | arr2[i];
        const binary = (array[i].toString(2)).padStart(n, '0').split("");
        
        for (let j = 0; j < binary.length; j++) {
            
            if (binary[j] === "1" ) {
                
                binary[j] = "#";

            } else if (binary[j] === "0") {
                
                binary[j] = " ";
            
            }
        }

        answer.push(binary.join(""));
    
    }
    return answer;
}