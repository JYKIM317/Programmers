
function network(computers, net, visited, idx, c) {
    if(visited[c]) return;
    visited[c] = true;
    for(let com in computers[c]) {
        if(computers[c][com] == 1 && !net[idx].includes(com)) {
            net[idx].push(com);
            network(computers, net, visited, idx, com);
        }
    }
}

function solution(n, computers) {
    let visited = {};
    let answer = {};
    let idx = 0;
    
    for(let c in computers) {
        if(!visited[c]) {
            idx++;
            answer[idx] = [];
            network(computers, answer, visited, idx, c);
        }
    }
    
    return Object.keys(answer).length;
}
