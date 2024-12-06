function solution(participant, completion) {
    personCount = {};

    for (person of participant) {
        personCount[person] = (personCount[person] || 0) + 1;
    }

    for (person of completion) {
        personCount[person] -= 1; 
    }

    for (person of participant) {
        if (personCount[person] > 0) {
            return person;
        }
    }
}