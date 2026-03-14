const inpt = '0 7 12 5';

const lentInput = inpt.length;

let res = 1;
let nowPos = 0;
    
while (nowPos < lentInput) {
    let num = 0;
    
    if (inpt[nowPos + 2] == ' ') {        
        num = inpt.slice(nowPos, nowPos + 2);
        nowPos += 2;
    } else {
        num = inpt[nowPos];
        nowPos += 1;
    }

    if (num != ' '){                
        res += +num;      
    }
    
}    


console.log(res);

