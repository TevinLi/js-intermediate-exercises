
var list = [];
var suits = [
    ['奔狼大剑', '狼眼', '狼牙', '狼趾', '40%'],
    ['风鹰之刃', '鹰眼', '鹰羽', '鹰爪', 400],
    ['灰熊臂垒', '熊图', '熊披', '熊爪', 500],
];
var equips = [
    ['方天画戟', 1],
    ['青龙偃月刀', 1],
    ['丈八蛇矛', 1],
    ['青虹剑', 1],
    ['雌雄双剑', 1],
    ['步摇', 2],
    ['凤冠', 2],
    ['华盛', 2],
    ['千彩流光', 3],
    ['纹龙', 3],
    ['温玉', 3],
    ['磐龙环', 4],
    ['青玉珠环', 4],
    ['天灵环', 4],
];
for (let i = 0; i < suits.length; i++) {
    list.push({
        name: suits[i][0],
        value: parseInt(Math.random() * 100 + 100) * 10,
        type: 1,
        suit: i + 1,
        suitValue: suits[i][4],
        sort: parseInt(Math.random() * 1000),
    });
    for (let j = 1; j <= 3; j++) {
        list.push({
            name: suits[i][j],
            value: parseInt(Math.random() * 10 + 10) * 10,
            type: j + 1,
            suit: i + 1,
            suitValue: suits[i][4],
            sort: parseInt(Math.random() * 1000),
        });
    }
}
for (let i = 0; i < equips.length; i++) {
    let value = 0;
    if (equips[i][1] === 1) {
        value = parseInt(Math.random() * 200 + 120) * 10;
    } else {
        value = parseInt(Math.random() * 20 + 15) * 10;
    }
    list.push({
        name: equips[i][0],
        value,
        type: equips[i][1],
        suit: 0,
        suitValue: null,
        sort: parseInt(Math.random() * 1000),
    });
}
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