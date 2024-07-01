function kindOfTangerine(k, tangerine) {
    let kind = {};
    let count = 0;
    for(let tang of tangerine) {
        if(kind[tang]) {
            kind[tang]++;
        } else {
            kind[tang] = 1;
        }
    }
    let kindList = Object.keys(kind).sort((a, b) => kind[b] - kind[a]);
    for(let size of kindList) {
        count++;
        k -= kind[size];
        if(k <= 0) return count;
    }
}

function solution(k, tangerine) {
    var answer = kindOfTangerine(k, tangerine);
    return answer;
}
