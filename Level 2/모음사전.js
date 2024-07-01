let answer = 0;
let find = false;
const aeiou = {0 : "A", 1 : "E", 2 : "I", 3 : "O", 4 : "U"};

function alphabet(word, thisWord) {
    answer++;
    for(let i = 0; i < Object.keys(aeiou).length && !find; i++) {
        if(word === thisWord.map(e => aeiou[e]).join('')) return find = true;
        if(thisWord.length < Object.keys(aeiou).length) {
            thisWord.push(i);
            alphabet(word, thisWord);
            thisWord.pop();
        }
    }
}

function solution(word) {
    for(let j = 0; j < Object.keys(aeiou).length && !find; j++) {
        alphabet(word, [j]);
    }
    return answer;
}
