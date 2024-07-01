function separateGroup(cards, idx) {
    let onlyGroup2 = new Array(...cards);
    let visited1 = {};
    let index = idx;
    let group2Max = 0;
    
    //group 1
    while(true) {
       if(!visited1[index]) {
           visited1[index] = true;
           index = cards[index] - 1;
           onlyGroup2.splice(onlyGroup2.indexOf(cards[index]), 1);
       } else {
           break;
       }
    }
    
    //group2
    for(let card of onlyGroup2) {
        let visited2 = {};
        index = card - 1;
        while(true) {
            if(visited1[index]) {
                if(group2Max < Object.keys(visited2).length) group2Max = Object.keys(visited2).length;
                break;
            }
            if(!visited2[index]) {
                visited2[index] = true;
                index = cards[index] - 1;
            } else {
                if(group2Max < Object.keys(visited2).length) group2Max = Object.keys(visited2).length;
                break;
            }
        }
    }
    
    
    return Object.keys(visited1).length * group2Max;
}

function solution(cards) {
    var answer = 0;
    
    for(let i in cards) {
        if(answer < separateGroup(cards, i)) answer = separateGroup(cards, i);
    }
    
    
    return answer;
}
