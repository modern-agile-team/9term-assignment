function solution(s){
    let count1 = 0;
    let count2 = 0;
    
    for(let i=0; i<s.length; i++) {
        if(s[i] === 'y' || s[i]==='Y') {
            count1++;
        }else if(s[i] === 'p' || s[i]==='P') {
            count2++;            
        }  
    }return count1===count2;
}