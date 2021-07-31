//  1. String concatenation
console.log("my" + "cat")
console.log("1" + 2)
console.log(`${1+2}`)

// 2. Numeric operators

//  3. Increment and decrement
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter} `)

const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter} `)

// 4. Assignment 
// a += 1

// 6. logical operatiors
// or은 무조건 처음에 true면 뒤에 실행도 안한다.
// || or 
// console.log(`or: ${value1 || value2 || check()}`);
// // || and
// console.log(`and: ${value && value2 && check()}`);

// 7. Equality
//  == loose equality type 신경 안씀
//  === strict equality type 무조건 같아야 함


// 8. Conditional operators : if 
const name = 'coder'

// 9. Ternary operator : ?
console.log(name === 'ellie' ? 'yes' : 'no')

// 10. Switch statment
const brower = 'IE'
switch (brower) {
    case 'IE':
        console.log('go away')
        break
    case 'Chrome':
        console.log('difficult')
        break
    default:
        console.log('same all')
        break;
}

// 11. Loops
let i = 3
while (i > 0) {
    console.log(`while: ${i}`);
    i--
}

do {
    console.log(`do while: ${i}`)
    i--
} while (i > 0);

// for 문
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`)
}

//  break. continue
for (let i = 0; i < 11; i++) {
    if (i % 2 == 0) {
        continue
    }
    console.log(`q1. ${i}`)
}