// :")hello:-\\world
//几个小作业：写出表达式求1到n的和；给定n，
//写出表达要求当n为素数时表达式为true反之为false，n小于50。
console.log(":\")hello:-\\\\world")
var i = 1;
var j = 0;
var sum = 0;
for (i; i <= 100; i++) {
    sum = sum + i;

}
console.log("1到100的和" + sum)
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('请输入一个数' + '\n', (answer) => {
    var n = parseInt(answer);
Boolean=((n%2!=0))&&(n%3!=0)&&(n%5!=0)&&(n%7!=0)
console.log(Boolean)
    r1.close();
});
