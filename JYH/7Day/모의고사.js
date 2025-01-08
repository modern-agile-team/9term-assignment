function solution(answers) {
    let person1 = [1, 2, 3, 4, 5];
    let person2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let arr = [0, 0, 0];
    let result =[];
    let length1 = person1.length, length2 = person2.length, length3 = person3.length;
    
    for (let i = 0; i < answers.length; i++) {
        if (person1[i % length1] === answers[i]) {
            arr[0] += 1;
        }
        if (person2[i % length2] === answers[i]) {
            arr[1] += 1;
        }
        if (person3[i % length3] === answers[i]) {
            arr[2] += 1;
        }
    }
    let MaxValue = Math.max(...arr);
    
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === MaxValue) {
            result.push(j + 1);
        }
    }
    return result
}