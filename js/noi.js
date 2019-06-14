// 1.3编程基础之算术表达式与顺序执行
//题目ID
//18
// var a1=1,a2=4,d=a2-a1,n=100
// var nvalue=a1+(n-1)*d
// console.log(nvalue)
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var a1,a2,n,nvalue

rl.question("输入a1\n", (a1) => {
    rl.question("输入a2\n", (a2) => {
        rl.question("输入n\n", (n) => {
           a1=parseInt(a1)
           a2=parseInt(a2)
           n=parseInt(n)
            d = a2 - a1
            nvalue = a1 + (n - 1) * d
            console.log(nvalue)
            rl.close()
        });
    });
});

