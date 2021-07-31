'use strict';

// Object
// one of the JavaScript's data types
// 일일이 다 하나씩 만들기에는 관리하기 어렵기에 생긴 object
// object = { key: value }

const obj1 = {};                // object literal syntax
const obj2 = new Object();      // object constructor

function print(person) {
    console.log(person.name)
}

const woong = {
    name:"woong",
    age: "4"
}

print(woong)

woong.hasJob = true;


// 2. Computed properties
// key는 항상 string 타입으로
console.log(woong.name)
console.log(woong['name'])


// 3. Property value shorthand
const person1 = { name: 'bob', age: '2'}
const person2 = { name: 'aoa', age: '3'}
const person3 = { name: 'coc', age: '4'}
const person4 = makePerson('dod', 5)
console.log(person4)

function makePerson(name, age) {
    return {
        name,
        age,
    }
}

// 4. Constructor function
function Person(name, age) {
    // this = { };
    this.name = name
    this.age = age;
    // return this;
}
const person5 = new Person('dod', 5)


// 5. in operator: property existence check
console.log('name' in woong)


// 6. for..in vs  for .. of
// for (key in obj)
console.clear();
for (let key in woong) {
    console.log(key)
}

// for (value of iterable)
const array = [1, 2, 3, 4, 5]
for(let value of array) {
    console.log(value)
}


// 7. cloning
// object.assign(dest, [obj1, obj2. .. ])
const user = {name: 'woong', age:'20'}
const user2 = user;
user2.name = 'coder'
console.log(user)

const user4 = Object.assign({}, user);
console.log(user4)