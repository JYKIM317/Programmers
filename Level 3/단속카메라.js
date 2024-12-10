function solution(routes) {
    let camera = -30001;
    routes.sort((a, b) => a[1] - b[1]);
    const cameraCount = routes.reduce((count, route) => {
        const min = Math.min(route[0], route[1]);
        if(min > camera) {
            count++;
            camera = route[1];
        }
        
        return count;
    }, 0);
    
    return cameraCount;
}
