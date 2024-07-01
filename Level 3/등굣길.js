function direction(track, imp) { 
    track[0][0] = 1;
    for(let i = 0; i < track.length; i++) {
        for(let j = 0; j < track[i].length; j++) {
            if(i !== 0 && !imp[`${j},${i}`]) {
                track[i][j] = (track[i][j] + track[i-1][j] ) % 1000000007;
            }
            if(j !== 0 && !imp[`${j},${i}`]) {
                track[i][j] = (track[i][j] + track[i][j-1]) % 1000000007;
            }
        }
    }
}

function solution(m, n, puddles) {
    let impossible = {};
    for(let puddel of puddles) {
        impossible[`${puddel[0] - 1},${puddel[1] - 1}`] = true;
    }
    let track = new Array(n).fill([]).map(() => new Array(m).fill(0));
    direction(track, impossible); 
    const answer = track[n-1][m-1];
    return answer % 1000000007;
}
