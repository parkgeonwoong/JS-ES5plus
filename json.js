// JSON
// JavaScript object Notation

// 1. Object to JSON
// Stringfy(obj)
let json = JSON.stringify(true)
console.log(json)

json = JSON.stringify(['apple', 'banana'])
console.log(json)

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`)
    },
}

json = JSON.stringify(rabbit)
console.log(json)

json = JSON.stringify(rabbit, ['name', 'color'])
console.log(json)

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`)
    return key === 'name' ? 'elie' : value;
})
console.log(json)


// 2. JSON to Object 
// parse(json)
console.clear()
json = JSON.stringify(rabbit)
const obj = JSON.parse(json, (key, value) => {
    return key === 'birthDate' ? new Date(value) : value;
})
console.log(obj)
rabbit.jump()

console.log(rabbit.birthDate.getDate())
