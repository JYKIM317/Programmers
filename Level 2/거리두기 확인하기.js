function distanceRule(place) {
    
    let area = place.map(e => e.split(''));
    for(let a = 0; a < area.length; a++) {    
        for(let i = 0; i < area.length; i++) {
            let thisPosition = area[a][i];
            if(thisPosition === "P") {
                for(let j = 1; j <= 2; j++) {
                    let diagonalR = a + j < area.length && i + j < area.length;
                    let diagonalL = a + j < area.length && i !== 0;
                    if(a + j < area[a].length) {
                        if(area[a+j][i] === "P" && area[a+j-1][i] !== "X") {
                            return 0;
                        }
                    }
                    if(i + j < area[a].length) {
                        if(area[a][i+j] === "P" && area[a][i+j-1] !== "X") {
                            return 0;
                        }
                    }
                    if(j === 1) {
                        if(diagonalR && area[a+j][i+j] === "P" && (area[a+j][i] !== "X" || area[a][i+j] !== "X")) {
                            return 0;
                        }           
                        if(diagonalL && area[a+j][i-j] === "P" && (area[a+j][i] !== "X" || area[a][i-j] !== "X")) {
                            return 0;
                        }
                    }
                }
            }
        }
    }
    
    return 1;
}

function solution(places) {
    var answer = [];
    for(let place of places) {
        answer.push(distanceRule(place));
    }
    return answer;
}
