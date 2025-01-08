function solution(s) {
    const charArray = s.split('');
    const sortedArray = charArray.sort();
    const reversedArray = sortedArray.reverse();
    const result = reversedArray.join('');
    return result;
}
