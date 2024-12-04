function solution(n) {
    const q = ['수','박'];
    let answer = ""
    for (let i=1; i<=n;i++){
        if  (i%2===1){
              answer += (q[0]);
        }else {
             answer += (q[1]);
        }       
    }
    return answer
}

