let arr = ['ilya', 'kantor']
let [name, surname] = arr
console.log(name, surname)

let [one, two] = [1, 2, 3]
console.log(one, two)

let [three, four] = [3]
console.log(three, four);

[one, , three] = [1, 2, 3, 4] // one, three는 변수이다. let 쓰면 에러
console.log(one, three)

//
let s = 'i am'
let [a, b, c] = s
console.log(a, b, c)

//
i = s.split(' ')
console.log(i);

[a, b] = i
console.log(a, b)

//
let user = {};
[user.name, user.surname] = 'john smith'. split(' ')
console.log(user)

//
user = {
    name: 'oscar',
    age: 21
}

let entries = Object.entries(user)
console.log(entries)

for(let [key, value] of entries) console.log(key, value)

//
let map = new Map([
    ['name', 'edith'],
    ['age', 30]
])

for(let [key, val] of map) console.log(key, val)

//
let guest = 'jane'
let admin = 'pete';

[guest, admin] = [admin, guest]
console.log(guest, admin)

//
[one, two, ...rest] = [1, 2, 3, 4]
console.log(one, two, rest);

