// async & await
// async 와 await는 Promise를 간결/간편하고 동기적으로 실행되는것 처럼 보이게 만들어주는 API
// async 와 await는 새로운 것이 추가 된게 아니라, 
// 기존에 존재하는 Promise 위에 조금 더 간편한 API를 제공함 이런 것을 syntactic sugar 라고 한다 (Class도 마찬가지..)

// 1. async
async function fetchUser() {
    return 'woong'
}

// 1-1. promise와 비교 해보자
// function fetchUser() {
//     return new Promise((resolve, reject) => {
//         resolve('woong')
//     })
// }

const user = fetchUser();
user.then(console.log)
console.log(user)


// 2. await
// await는 async 함수 내부에만 사용 가능
// JS는 await키워드를 만나면 promise가 처리 될때까지 기다린다.
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function getApple() {
    await delay(2000)
    return 'apple'
}

async function getPeach() {
    await delay(1000)
    return 'Peach'
}

async function pickFruits() {
    const applePromise = getApple()
    const peachPromise = getPeach()

    const apple = await applePromise
    const peach = await peachPromise
    return `${apple} + ${peach}`
}

pickFruits().then(console.log)


// 3. useful Promise APIS
function pickAllFruits() {
    return Promise.all([getApple(), getPeach()])
        .then(fruits => fruits.join(' + '))
}

pickAllFruits().then(console.log)


function pickOnlyOne() {
    return Promise.race([getApple(), getPeach()])
}

pickOnlyOne().then(console.log)