let arr = new Array(1, 'hello', true, {age: 3}, function fn(){}, class A{})
console.log(arr)

arr = [null, undefined, NaN]
console.log(arr)

//
arr = []
arr[0] = 'a'
arr[2] = 'c'

console.log(arr)
console.log(arr[1])

console.log(arr.length)

//
let matrix = [ // matrix는 행과 열의 수 가 같아야 한다.
    [1, 2],
    [3, 4]
] // 2행 2열

//
let a = [1, 2]
let b = [2, 3]
let c = a.concat(b)
console.log(c)

arr = []
arr.push(1)
arr.push(2)
arr.push(3)

console.log(arr)
console.log(arr.pop()) // 후입선출 Lifo
console.log(arr)

//
arr = []
arr.push(1)
arr.push(2)
arr.push(3)

console.log(arr)
console.log(arr.shift()) // 선입선출 Fifo
console.log(arr)

//
a = [0, 1, 2]
b = a.slice(1) // slice(1) 1 index부터 1포함
console.log(b, a)

//
arr = [0, 7, 8, 5] 
arr.splice(1, 2, 1, 2, 3, 4)// 7, 8 자리에 1234 를 삽입
console.log(arr)

// slice 는 return 을 하고,
// splice 는 return 하지 않는다.

//
arr = ['a', 'b', 'c']
console.log(arr.indexOf('b')) // 1

arr.splice(arr.indexOf('b')) // b 포함 잘라내기
console.log(arr)

arr = ['a', 'b', 'c', 'd']
arr.splice(arr.indexOf('b'), 1)
console.log(arr)

//
arr = [4, 3, 1, 2]
let s = arr.sort()
console.log(arr, s)
// 과제: s 가 arr 인지, 확인하라.
console.log(s == arr) // true

arr = [8, 11, 22, 34, 9]
console.log(arr.sort()) // sort는 숫자 8, 11 등 으로 파악하는 것이 아니라, 문자String으로 취급한다.

console.log(arr.sort((a, b) => a - b)) // 오름차순
console.log(arr.sort((a, b) => b - a)) // 내림차순

//
arr = ['a', 'b', 'c']

for(let i = 0; i < arr.length; i++)
    console.log(arr[i])

for(let key in arr) console.log(key) // index 를 return

// 과제: 원소를 출력하라.
for(let key in arr) console.log(arr[key])
for(let val of arr) console.log(val)

//
function print(e) {

}

function print2(e, i) {
    console.log(`[${i}]: ${e}`)
}

function print3(e, i, arr) {
    arr[i] = e.toUpperCase()
}

arr = ['a', 'b']

arr.forEach(print)

arr.forEach(print2)
console.log(arr)

arr.forEach(print3)
console.log(arr)

//
arr = [1, 2, 3]
let arr2 = arr.map(e => e * 2)
console.log(arr, arr2)

//
let group = {
    title: 'art',
    students: ['winston', 'cal', 'maritha'],
    list() {
        this.students.forEach(studentName =>
            console.log(this.title, ':', studentName))
    }
}

group.list()

//
arr = ['hello', 'world', 2]
let greeting = arr.join()
console.log(greeting) // join : , 를 구분자로 이용, 각각의 단어를 불러온다.
console.log(typeof greeting)

console.log(arr.join('/')) // '/'를 구분자로
// 과제: arr.join()에서  'helloworld2'를 return 하라.
console.log(arr.join(''))

//
arr = [1, 2, 3]
str = arr.toString()
console.log(str, '/', typeof str)

//
str = JSON.stringify(arr)
console.log(str, '/', typeof str)