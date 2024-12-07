function solution(participant, completion) {
    var answer = '';
    const sortParti = participant.sort();
    const sortComple = completion.sort();
    for(let i = 0; i < participant.length; i++){
        if(sortParti[i] !== sortComple[i]){
            answer = sortParti[i];
            break;
        }
    }
    return answer;
}