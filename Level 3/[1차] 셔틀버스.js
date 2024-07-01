function convertTimeforMinute(time) {
    let [h, m] = time.split(":");
    let minute = parseInt(h) * 60 + parseInt(m);
    return minute;
}

function convertMinuteforTime(minute){
    let h = parseInt(minute / 60);
    let m = parseInt(minute % 60);
    h >= 10 ? h : h = `0${h}`;
    m >= 10 ? m : m = `0${m}`;
    return `${h}:${m}`;
}

function solution(n, t, m, timetable) {
    var answer = '';
    let beginTime = convertTimeforMinute("09:00");
    let sortTable = timetable.sort((a, b) => {
       return convertTimeforMinute(a) - convertTimeforMinute(b); 
    });
    
    let lastCrew = null;
    let leftMember = null;
    let idx = 0;
    
    for(let i = 0; i < n; i++) {
        let thisTime = beginTime + i * t;
        leftMember = m;
        for(let j = idx; j < sortTable.length; j++) {
            let crew = sortTable[j];
            if(convertTimeforMinute(crew) <= thisTime && leftMember !== 0) {
                leftMember--;
                lastCrew = crew;
                idx = j + 1;
            } else {
                break;
            }
        }
        
        if(sortTable.length === 0) break;
    }

    if(leftMember === 0) {
        let haveToStandby = convertTimeforMinute(lastCrew) - 1;
        answer = convertMinuteforTime(haveToStandby);
    } else {
       answer = convertMinuteforTime(beginTime + (n-1) * t);
    }
    
    return answer;
}
