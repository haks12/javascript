let promise = new Promise((resolve, reject) => resolve('done'))
/*
promise.then(console.log, console.log) // done
promise.then(console.log, null)

promise.the(consol.log)
promise.catch(console.log)

*/
// 과제 : 1초 뒤에, resolve 하도록 한다.
/*
promise = new Promise((resolve, reject) => { //executor
    setTimeout(() => resolve('done'), 1000)
})

promise.then(console.log, console.log) // handler

//
promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('에러')), 1000)
})

promise.then(result => console.log(result),
    error => console.log(error))
*/
//
new Promise((resolve, reject) =>
    setTimeout(() => reject('완성'), 2000))
    .then(console.log) // then 은 주어객체 그대로를 return 한다.
    .finally (() => console.log('promise가 생성되었습니다.')) // finally 는 promise의 성공유무 상관없이 promise를 알려준다.

new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('미완성')), 3000))
    .then(console.log) // then 은 주어객체 그대로를 return 한다.
    .catch(e => console.log(e.message))
    .finally (() => console.log('promise가 생성되었습니다.')) // finally 는 promise의 성공유무 상관없이 promise를 알려준다.
