function road(visited, dir, position) {
    let nx = position[0], ny = position[1];
    if(dir === "L" || dir === "R") {
        dir === "L" ? nx -= 1 : nx += 1;
        nx = nx > 5 ? nx -= 1 : nx < -5 ? nx += 1 : nx;
    } else {
        dir === "D" ? ny -= 1 : ny += 1;
        ny = ny > 5 ? ny -= 1 : ny < -5 ? ny += 1 : ny;
    }
    if(nx === position[0] && ny === position[1]) return [nx, ny];
    
    if(!visited[`${position[0]},${position[1]}-${nx},${ny}`] && !visited[`${nx},${ny}-${position[0]},${position[1]}`]) {
        visited[`${position[0]},${position[1]}-${nx},${ny}`] = true;
    }
    
    return [nx, ny];
}

function solution(dirs) {  
    let answer = 0;
    let visited = {};
    let position = [0, 0];
    dirs.split('').forEach(dir => position = road(visited, dir, position));
    
    return Object.keys(visited).length;
}
