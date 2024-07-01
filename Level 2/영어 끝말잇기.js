function wordTrain(n, words) {
    let used = {}; 
    for(let idx in words) {
        if(idx * 1 === 0) {
            used[words[idx]] = true;
            continue;
        }
        const thisWord = words[idx].split('');
        const beforeWord = words[idx - 1].split('');
        const isLastChar = beforeWord[beforeWord.length - 1] === thisWord[0];
        const isUsed = used[words[idx]] != null;
        const isSingleChar = thisWord.length === 1;
        if(!isLastChar || isUsed || isSingleChar) {
            return [idx % n + 1, Math.ceil((idx * 1 + 1) / n)];
        } else {
            used[words[idx]] = true;
        }
    }
    return [0, 0]
}

function solution(n, words) {

    return wordTrain(n, words);
}
