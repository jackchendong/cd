function People(name) {
    this.name = name
}
People.prototype = {
    say: function () {
        console.log('我的名字是', this.name)
    }
}
People.prototype.eat = function () {
    console.log('不吃')
}

module.exports = People // 暴露方法就是构造函数
// module.exports = {  // 这个就是 属性
//     name: '啊啊啊'
// }