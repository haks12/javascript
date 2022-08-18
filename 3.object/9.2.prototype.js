let obj ={}

console.log(obj.__proto__)
console.log(obj.__proto_ == Object.prototype) // false

//
obj = new Object()
console.log(Object.__proto__)
console.log(obj.__proto__)
console.log(Object.prototype.__proto__) // null

console.log(obj.toString()) //[object Object]

//
let arr1 = [1, 2]
let arr2 = new Array(1, 2)
console.log(arr1.__proto__ == arr2.__proto__) // true
console.log(arr1.__proto__ == Array.prototype) // true

console.log(Array.prototype.__proto__)
console.log(Object.prototype)
console.log(Array.prototype.__proto__ == Object.prototype) // true
// 모든 생성자의 proto type들은 Object type의 proto type을 갖고있다.
console.log(arr2) // [1, 2] 출력

//
let one = new Number(1)
console.log(one.toString()) // 1

//
function User() {}
let user = new User()
console.log(user.toString()) //[object Object] 출력
console.log(obj.toString()) // [object Object] 출력