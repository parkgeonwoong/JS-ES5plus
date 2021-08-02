'use strict';

// JS 는 동기적
// 호이스팅 이후부터 코드가 순서에 맞춰서 실행
// hoisting: var, 함수 선언들이 제일 위로 올라가는 것
console.log('1') // 동기
setTimeout(() => {
    console.log('2') // 비동기 
}, 1000)
console.log('3') // 동기

// 콜백 동기, 비동기 둘다 쓰임
// 1. 동기 콜백
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello')) // 동기 


// 2. 비동기 콜백
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(() => console.log('async callback'), 2000) // 비동기


// 콜백 지옥 예제
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'woong' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'))
            }
        }, 2000)
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'woong') {
                onSuccess({
                    name: 'woong',
                    role: 'admin'
                })
            } else {
                onError(new Error('no access'))
            }
        }, 1000)
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id')
const password = prompt('enter your password')
userStorage.loginUser(
    id,
    password,
    (user) => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
            })
    }, (error) => {
        console.log(error)
    })