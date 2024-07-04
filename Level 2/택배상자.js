function solution(order) {
    let sub = [];
    let container = [];
    let orderIndex = 0;
    for(let i = 1; i <= order.length; i++) {
        if(container.length === 0) {
            if(order[orderIndex] === i) {
                container.push(i)
                orderIndex++;
            } else sub.push(i);
        } else {
            if(order[orderIndex] === i) {
                container.push(i);
                orderIndex++;
            } else {
                if(order[orderIndex] === sub[sub.length - 1]) {
                    container.push(sub.pop());
                    orderIndex++;
                    i -= 1;
                } else {
                    sub.push(i);
                    if(order[orderIndex] < i) break;
                }
            }
        }
    }
    
    while(sub.length != 0) {
        if(order[orderIndex] == sub[sub.length - 1]) {
            container.push(sub.pop());
            orderIndex++;
        } else break;
    }
    
    return container.length;
}
