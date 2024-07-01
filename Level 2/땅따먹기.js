function myLand(land) {
    for(let i = 1; i < land.length; i++) {
        let bfMax = 0;
        let bfmIdx = null;
        let bfSec = 0;
        for(let k = 0; k < 4; k++) {
            if(bfMax < land[i - 1][k]) {
                bfSec = bfMax;
                bfMax = land[i - 1][k];
                bfmIdx = k;
            } else if(bfSec < land[i - 1][k]) {
                bfSec = land[i - 1][k];
            }
        }
        for(let j = 0; j < 4; j++) {
            bfmIdx !== j ? land[i][j] += bfMax : land[i][j] += bfSec;
        }
    }
    return Math.max(...land[land.length - 1]);
}

function solution(land) {
    let answer = myLand(land);
    
    return answer;
}
