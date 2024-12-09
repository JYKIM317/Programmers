function solution(A, B) {
    let temp = 0;
    let winCount = 0;
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    const ARRAY_LENGTH = B.length;
    
    for(let index = 0; index < ARRAY_LENGTH; index++) {
        if(A[index - temp] < B[index]) winCount++;
        else temp++;
    }
    
    return winCount;
}
