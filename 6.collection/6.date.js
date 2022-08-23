console.log(Date())
console.log(typeof Date()) // string

let date = new Date()
console.log(date)
console.log(typeof date) // object
console.log(date.toLocaleDateString()) // 2022. 8. 23.

date = new Date('2022-08-23T07:27:30.999Z') // UTC + 9시간 = 한국시간
console.log(date.toLocaleDateString()) // 2022. 8. 23.
console.log(date.toLocaleTimeString()) // 오전 1:27:30

console.log(
    date.getFullYear(), // 2022
    date.getMonth(), // 7
    date.getDate(), // 23
    date.getUTCHours()
) // 다모여서 2022 7 23

date = new Date(1000 * 60 * 60 * 24)
console.log(date)

date = new Date(-1000 * 60 * 60 * 24)
console.log(date)
