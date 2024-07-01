function solution(s) {
    let stringList = s.split(' ');
    let maxNum = -Infinity;
    let minNum = Infinity;
    stringList.map((e) => {
        const num = parseInt(e)
        if(num > maxNum) maxNum = num;
        if(num < minNum) minNum = num;
    });
    
    var answer = String(minNum + ' ' + maxNum);
    return answer;
}
