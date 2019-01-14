var moment = require('moment')
// console.log(moment().format("YYYY-MM-DD HH:mm:ss"))
// console.log(moment(new Date()).format("YYYY-MM-DD HH:mm:ss"))
// console.log(moment(12123332).format("YYYY-MM-DD HH:mm:ss"))
console.log(moment("2017-11-11 12:12:13").format('x'))

console.log(moment().toDate())

// 2018-12-07T16:17:48.673Z
let a = moment("2019-01-11T11:00:00.000Z") - moment()//subtract(moment.duration(1,'h'))
console.log(a)
h = parseInt(a / 3600000)
m = parseInt(a / 60000)
s = parseInt(a / 1000)
// m = a%

console.log(111, h, m, s)



function timing(start, end) {
    const hour = 1000 * 60 * 60
    const minute = 1000 * 60
    const seconds = 1000
    const duration = moment(end) - moment(start)
    const h = parseInt(duration / hour)
    const m = parseInt((duration - h * hour) / minute)
    const s = parseInt((duration - h * hour - m * minute) / seconds)
    return {
        h: h < 10 ? '0' + h : h,
        m: m < 10 ? '0' + m : m,
        s: s < 10 ? '0' + s : s,
    }
}

let c = timing(moment(), moment('2018-12-08T01:10:48.673'))
console.log(c)