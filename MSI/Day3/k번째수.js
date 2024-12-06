function solution(array, commands) {
    const result = [];

    commands.forEach(command => {
        const [i, j, k] = command;
        const slicedArray = array.slice(i - 1, j);
        const sortedArray = slicedArray.sort((a, b) => a - b);
        result.push(sortedArray[k - 1]);
    });

    return result;
}