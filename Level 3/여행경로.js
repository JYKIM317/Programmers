function buildTrack(ticket, tickets, track) {
    let possibleList = [];
    tickets.splice(tickets.indexOf(ticket), 1);
    if(tickets.length !== 0) {
        for(let t of tickets) {
            if(t[0] === ticket[1]) possibleList.push(t);
        }
        possibleList = compareLocation(possibleList);
    
        for(let next of possibleList) {
            track = buildTrack(next, tickets, track);
            if(track.length !== 0) {
                track.push(ticket[1]);
                break;
            } else {
                tickets.push(next);
            }
        }
    } else {
        track.push(ticket[1]);
    }
        
    return track;
}

function compareLocation(tickets) {
    let sortTickets = tickets.sort((a, b) => {
        return  a[1].localeCompare(b[1]);
    });
    return sortTickets;
}

function solution(tickets) {
    var answer = [];
    let possibleStart = [];
    
    for(let ticket of tickets) {
        if(ticket[0] === "ICN") possibleStart.push(ticket);
    }
    possibleStart = compareLocation(possibleStart);
    
    for(let begin of possibleStart) {
        answer = buildTrack(begin, tickets, answer);
        if(answer.length !== 0) {
            answer.push(begin[0]);
            break;
        } else {
            tickets.push(begin);
        }
    }
    
    answer.reverse();
    
    return answer;
}
