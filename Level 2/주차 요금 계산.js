function bill(time, fees) {
    let fee = null;
    if(time <= fees[0]) {
        fee = fees[1];
    } else {
        let extraTime = time - fees[0];
        if(extraTime % fees[2] != 0) extraTime += fees[2] - extraTime % fees[2];
        
        let extraFee = extraTime / fees[2] * fees[3];
        fee = fees[1] + extraFee;
    } 
    
    return fee;
}

function timeCalculator(timeToString) {
    //00:00
    let timeToArr = timeToString.split(":");
    let timeForMinute = parseInt(timeToArr[0]) * 60 + parseInt(timeToArr[1]);
    
    return timeForMinute;
}

function solution(fees, records) {
    var answer = [];
    
    let temp = {};
    let charge = {};
    
    for(record of records) {
        let thisRecord = record.split(" ");
        let thisRecordTime = timeCalculator(thisRecord[0]);
        let thisCarNum = parseInt(thisRecord[1]);
        
        if(temp[thisCarNum] == null) {
            temp[thisCarNum] = [thisRecordTime, thisCarNum];
        } else {
            let initialRecord = temp[thisCarNum];
            delete temp[thisCarNum];
            let currentRecord = [thisRecordTime, thisCarNum];
            let stayTime = currentRecord[0] - initialRecord[0]
            
            if(charge[thisCarNum] == null) {
                let thisFee = bill(stayTime, fees);
                charge[thisCarNum] = [stayTime, thisFee];
            } else {
                let initialFee = charge[thisCarNum];
                let newFee = bill(initialFee[0] + stayTime, fees);
                charge[thisCarNum] = [initialFee[0] + stayTime, newFee];
            }
        }
    }
    
    for(noOut in temp) {
        let extraRecord = temp[noOut];
        delete temp[noOut];
        let maxTime = timeCalculator("23:59");
        let stayTime = maxTime - extraRecord[0];
        
        if(charge[noOut] == null) {
            let thisFee = bill(stayTime, fees);
            charge[noOut] = [stayTime, thisFee];
        } else {
            let initialFee = charge[noOut];
            let newFee = bill(initialFee[0] + stayTime, fees);
            charge[noOut] = [initialFee[0] + stayTime, newFee];
        }
    }
    
    let chargeKeys = Object.keys(charge);
    chargeKeys.sort((a,b) => a-b);
    
    for(const key of chargeKeys) {
        answer.push(charge[key][1]);
    }
    
    
    return answer;
}
