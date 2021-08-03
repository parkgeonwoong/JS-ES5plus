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