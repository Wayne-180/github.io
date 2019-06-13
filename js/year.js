const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('请输入年份' + '\n', (answer) => {
    var i = parseInt(answer);
    if (i % 4 === 0 && i % 100 != 0) {
        console.log(i + "是闰年")
    }
    else if (i % 400 === 0 && i % 3200 != 0) {
        console.log(i + "是闰年")
    } else {
        console.log("输入有误")
    }

    rl.close();
});