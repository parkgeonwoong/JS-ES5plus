// 콜백 지옥 예제 해결 
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'woong' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'))
                }
            }, 2000)
        })
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'woong') {
                    resolve({
                        name: 'woong',
                        role: 'admin'
                    })
                } else {
                    reject(new Error('no access'))
                }
            }, 1000)
        })
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id')
const password = prompt('enter your password')
userStorage
    .loginUser(id, password)
    .then(user => userStorage.getRoles)
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log)