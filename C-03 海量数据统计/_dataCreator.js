var list = [];
var emps = [
    { empId: 2, empName: '张三' },
    { empId: 3, empName: '李四' },
    { empId: 5, empName: '王五' },
]
for (var i = 0; i < 1000; i++) {
    var empIndex = parseInt(Math.random() * 3);
    var day = parseInt(Math.random() * 30) + 1;
    var date = '2021-06-' + (day < 9 ? ('0' + day) : day);
    var time = new Date(date);
    var price = parseInt(Math.random() * 10) * 5 + 50;
    var orderNum = 'O' + (Date.now() + i) + (parseInt(Math.random() * 80000) + 10000);
    list.push({
        ...emps[empIndex],
        date,
        time,
        price,
        orderNum,
    });
}
list.sort((a, b) => a.time < b.time ? -1 : 1);
list.forEach((item, index) => {
    item.id = index + 10;
    delete item.time;
});
var output = 'var resource = ' + JSON.stringify(list) + ';';
output = output.replace('[', '[\n')
    .replace(/\{/g, '    {')
    .replace(/\}\]/, '}\n]')
    .replace(/\},/g, '},\n')
    .replace(/"([a-zA-Z]*)":/g, '$1:');
console.log(output);