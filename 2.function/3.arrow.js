let adds = function(a, b) {
    return a + b
}

add = (a, b) => a + b//para(a, b)는 앞, 블럭의 내용 a + b 를 뒤에 기재
console.log(add(1, 2))

const double = n => 2 * n
console.log(double(2))

const greet = () => console.log('hello')
greet()

//
add = (a, b) => {
    const result = a + b
    return result
}

console.log(add(1, 2))