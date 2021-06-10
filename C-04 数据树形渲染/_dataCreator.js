var list = [];
var level1 = [];
var level2 = [];
var level3 = [];
var level4 = [];
for (let i = 0; i < 3; i++) {
    var id = i + 1;
    level1.push({
        id,
        name: '主干-' + id,
        parentId: 0,
        sort: parseInt(Math.random() * 1000),
    });
}
for (let i = 0; i < 10; i++) {
    var id = i + 1 + 3;
    var parentId = level1[parseInt(Math.random() * 3)].id;
    level2.push({
        id,
        parentId,
        name: '枝干-' + parentId + '-' + id,
        sort: parseInt(Math.random() * 1000),
    });
}
for (let i = 0; i < 40; i++) {
    var id = i + 1 + 3 + 10;
    var parentId = level2[parseInt(Math.random() * 10)].id;
    level3.push({
        id,
        parentId,
        name: '枝条-' + parentId + '-' + id,
        sort: parseInt(Math.random() * 1000),
    });
}
for (let i = 0; i < 200; i++) {
    var id = i + 1 + 3 + 10 + 40;
    var parentId = level3[parseInt(Math.random() * 40)].id;
    level4.push({
        id,
        parentId,
        name: '树叶-' + parentId + '-' + id,
        sort: parseInt(Math.random() * 1000),
    });
}
list = [].concat(level1, level2, level3, level4);
list.sort((a, b) => a.sort < b.sort ? -1 : 1);
list.forEach(item => {
    delete item.sort;
});
var output = 'var resource = ' + JSON.stringify(list) + ';';
output = output.replace('[', '[\n')
    .replace(/\{/g, '    {')
    .replace(/\}\]/, '}\n]')
    .replace(/\},/g, '},\n')
    .replace(/"([a-zA-Z]*)":/g, '$1:');
console.log(output);