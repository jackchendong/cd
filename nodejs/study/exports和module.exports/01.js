// let People = require('./module.exports')
// const people = new People('张三')
// people.say()
// people.eat()

// var a = People() // undefined


// let a = require('./module.exports') 暴露方法就是构造函数
// console.log(a)


/**
 * exports // 提供了命名空间
 */
let a = require('./exports')

console.log(a)