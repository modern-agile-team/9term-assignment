function solution(participant, completion) {
    let count = {};
    
    for (const name of participant) {
        count[name] = (count[name] || 0) + 1;
    }
    for (const name of completion) {
        count[name] -= 1;
    }
    for (const name in count) {
        if (count[name] > 0) {
            return name;
        }
    }
}