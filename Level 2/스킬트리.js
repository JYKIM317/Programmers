function chainCheck(chainSkill, skillTree) {
    let chain = chainSkill.split('');
    let tree = skillTree.split('');
    for(let skill of tree) {
        if(chain.includes(skill)) {
            if(chain[0] === skill) chain.shift();
            else return false;
        }
    }
    
    return true;
}

function solution(skill, skill_trees) {
    var answer = 0;
    for(let skillTree of skill_trees) {
        if(chainCheck(skill, skillTree)) answer++;
    }
    
    return answer;
}
