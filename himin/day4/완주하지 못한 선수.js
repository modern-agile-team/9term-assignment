function solution(participant, completion) {
    const personCount = {};
    
    for (const person of participant) {
        personCount[person] = (personCount[person] || 0) + 1;
    }
    
    for (const person of completion) {
        personCount[person] -= 1;
    }
    
    for (const person of participant) {
        if (personCount[person] > 0) {
            return person;
        }
    }
}