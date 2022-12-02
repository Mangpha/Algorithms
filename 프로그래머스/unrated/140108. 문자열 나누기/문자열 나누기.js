function solution(s) {
    const ans = []
    let start = '';
    let dif = 0;
    let tmp = 0;
    for(let i=0; i<s.length; i++) {
        if(start.length === 0) {
            start = s[i];
            dif++;
            continue;
        }
        if(start[0] === s[i]) dif++;
        else tmp++;
        start += s[i];
        if(dif === tmp) {
            ans.push(start)
            start = '';
        }
    }
    return ans.join('').length !== s.length ? ans.length + 1 : ans.length
}