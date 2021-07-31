// 1. function == object 일종

// 2. Parameters
function changeName(obj) {
    obj.name = 'coder'
}

const ellie = { name: "ellie"}
changeName(ellie)
console.log(ellie)


// 3. Default parameters (ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!')


// 4. Rest parameter (ES6)
function printAll(...args) {                // ...= rest parameter 배열형태
    for (let i=0; i<args.length; i++){
        console.log(args[i])
    }

    for (const arg of args) {               // for of ~
        console.log(`for of: ${arg}`);
    }

    args.forEach((arg) => console.log(arg));    // forEach
}
printAll('dream', 'coding', 'ellie')    // 배열형태


// 5. Local scope ==> 지역변수, 전역변수
let globalMessage = 'global';   // global variable 
function printMessage() {
    let message = 'Hello'
    console.log('message:', message);       // local variable
    console.log('globalMessage:', globalMessage);
}
printMessage();


// 6. Return a value
function sum(a, b) {
    return a + b
}
const result = sum(1, 2);
console.log(`sum: ${sum(1,2)}`);


// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if(user.point > 10) {
        // logic...
    }
}

// good
function upgradeUser(user) {
    if(user.point <= 10) {
        return;
    }
}


// 1. function expression
const print = function() {      // anonymous function
    console.log('print')
}
print()


// 2. Callback function 
function randomQuiz(answer, printYes, printNo) {    // 함수에 전달할때 상황에 맞을 떄 부르는 것 : 콜백
    if(answer === 'love you') {
        printYes()
    } else {
        printNo()
    }
}
const printYes = function() {
    console.log('yes')
}

const printNo = function() {
    console.log('no')
}

randomQuiz('wrong', printYes, printNo)
randomQuiz('love you', printYes, printNo)


// 3. Arrow function
// always anonymous
const simplePrint = () => console.log('simple')
const add = (a, b) => a + b;
// {} 쓰면 return 해야함


// IIFE: 선언함과 동시에 호출
(function hello() {
    console.log('IIFE')
})();