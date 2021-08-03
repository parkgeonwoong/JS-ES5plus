'use strict';

// Promise: 비동기에 사용하는 콜백함수 대신 유용하게 사용하는 오브젝트
// 1. State: 성공 실패 상태
// 2. Producer, Consumer 차이

// state: pending --> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// 새로운 promise만들떄, 자동적으로 executor 실행된다.
const promise = new Promise((resolve, reject) => {
    // heavy 한거 --> 시간이 걸리므로 (network, read files)
    console.log('doing something....')
    setTimeout(() => {
        // resolve('woongs coming')
        reject(new Error('Why no reason'))
    }, 2000)
});

// 2. Consumer: then, catch, finally를 통해 값을 받아옴
promise
    .then((value) => {
        console.log(value)
    })
    .catch(error => {
        console.log(error)
    })
    .finally(() => {
        console.log('finally')
    })


// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
})

// then: 값을 바로 전달해도 되고, promise를 전달해도 됨 
fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000)
        })
    })
    .then(num => console.log(num))


// 4. Error handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('chicken'), 1000);
    })
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => egg`)), 1000)
    })
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 후라이`), 1000)
    })

getHen() //
    .then(hen => getEgg(hen))
    .catch(error => {
        return '빵'
    })
    .then(egg => cook(egg))
    .then(meal => console.log(meal))
    .catch(console.log)