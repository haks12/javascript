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
let matrix = [
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
console.log(arr.pop()) // 제일 꼭대기에 있는 값을 얻어낸다.
console.log(arr)

//
arr = []
arr.push(1)
arr.push(2)
arr.push(3)

console.log(arr)
console.log(arr.shift())
console.log(arr)

//
a = [0, 1, 2]
b = a.slice(1)
console.log(b, a)

//
arr = [0, 7, 8, 5] 
arr.splice(1, 2, 1, 2, 3, 4)// 7, 8 자리에 1234 를 삽입
console.log(arr)

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
console.log(arr.sort()) // sort는 숫자 8, 11 등 으로 파악하는 것이 아니라, 문자String으로 인식한다.

console.log(arr.sort((a, b) => a - b))
console.log(arr.sort((a, b) => b - a)) // 숫자로 인식

//
arr = ['a', 'b', 'c']

for(let i = 0; i < arr.length; i++)
    console.log(arr[i])

for(let key in arr) console.log(key)

// 과제: 원소를 출력하라.
for(let key in arr) console.log(arr[key])
for(let val of arr) console.log(val)

// slice 는 return 을 하고,
// splice 는 return 하지 않는다.