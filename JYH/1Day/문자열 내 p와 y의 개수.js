function solution(s){
    let a = 0;
    let b = 0;
    
    for(let i = 0; i < s.length; i++){
        if(s[i] == 'y'){
            a++;
        }
        else if(s[i] == 'Y'){
            a++;
        }
        if(s[i] == 'p'){
            b++;
        }
        else if(s[i] == 'P'){
            b++;
        }
    }
    let answer = a === b;
    return answer;
}

console.log(solution("PPpYy"))