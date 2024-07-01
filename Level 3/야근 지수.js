function solution(n, works) {
    var answer = 0;
    let idx = 0;
    works.sort((a, b) => b - a);
    while(n > 0) {
        if(works[works.length -1] == 0) break;
        if(idx === works.length - 1) {
            if(works[idx] != 0) {
                works[idx]--;
                n--;
            }
            idx = 0;
            continue;
        }
        
        if(works[idx] > works[idx+1]) {
            works[idx]--;
            n--;
            if(idx !== 0 && works[idx - 1] >= works[idx]) idx = 0;
        } else if(works[idx] == works[idx+1]) {
            works[idx]--;
            n--;
            idx++;
        } else {
            idx++;
        }
    }
    
    answer = works.reduce((acc, cur, i) => {
        return acc = acc + (cur ** 2);
    }, 0);
    
    return answer;
}
