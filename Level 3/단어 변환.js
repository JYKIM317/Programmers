function findCanChange(thisWord, words) {
    let result = [];
    let wrd = thisWord.split('');
    for(let word of words) {
        let wordSplit = word.split('');
        let dif = 0;
        for(let i in wordSplit) {
            if(wrd[i] !== wordSplit[i]) dif++;
        }
        if(dif === 1) result.push(word);
    }
    
    return result;
}

function wordParser(thisWord, target, words, history, result) {
    if(thisWord === target) return history;
        
    let queue = findCanChange(thisWord, words);
    let newWords = words.filter((e) => e !== thisWord);
    for(let q of queue) {
        history.push(q);
        let rst = wordParser(q, target, newWords, [...history], result);
        if(rst != null && (result.length === 0 || rst.length < result.length)) result = rst;
        history.pop();
    }
    
    return result;
}

function solution(begin, target, words) {

    let answer = [];
    answer = wordParser(begin, target, words, [], answer);
    return answer.length;
}
