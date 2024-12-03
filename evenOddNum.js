function solution(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}





//실행환경
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


rl.question("정수를 입력하세요: ", (input) => {
    const num = parseInt(input, 10); 
    if (isNaN(num)) {
        console.log("유효한 정수를 입력해주세요."); 
    } else {
        console.log(`결과: ${solution(num)}`); 
    }

    rl.close(); 
});
