function solution(topping) {
    let answer = 0;
    
    let lCake = Array(10000).fill(0);
    let rCake = Array(10000).fill(0);
    let lSize = 0;
    let rSize = 0;
    
    topping.forEach(e => rCake[e-1]++);
    rSize = rCake.filter(e => e !== 0).length;
    topping.forEach((e) => {
        if(lCake[e-1] === 0) lSize++;
        lCake[e-1]++;
        rCake[e-1]--;
        if(rCake[e-1] === 0) rSize--;
        if(lSize === rSize) answer++;
    });
    
    return answer;
}
