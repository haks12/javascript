let val = 1 + 2 * 3 / 2
console.log(val, 5, 4**2, 4**(1/2)) // **제곱, **(1/2)루트

let i = 1
console.log(++i, --i)

let foo = 'hello'
let bar = 'world'
console.log(foo + ' ' + bar)
console.log(1 + '2', '1' + '2')

// unary plus operator
console.log(1 + +'2') //+기호를 문자앞에 붙히면 숫자로

console.log(1 || 0, 0 || 1) //논리연산자는 마지막으로 읽은 값을 return 하고 끝낸다.
console.log(1 && 0, 0 && 1)
console.log(1 && 2, 2 && 1)

//foo && do(foo)
//bar = baz || createBar()

console.log()
let c = 3 - (a = 1 + 2)
console.log(c)

let d = 2
d *= 2
console.log(d)

console.log()
console.log('2' > 1)

console.log()
console.log('2' > 1, '01' == 1)