'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2]

// 2. Index position
const fruits = ['apple', 'banana']
console.log(fruits.length)
console.log(fruits[0])



// 3. Loopting Array
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

// b. in, of
for (let i in fruits) {
    console.log(fruits[i])
}

// c. forEach
fruits.forEach( (fruit) => console.log(fruits))


// 4. Addtion, deletion, copy
// push 
// pop

fruits.push('str', 'pitc')
console.log(fruits)

fruits.pop()
console.log(fruits)


// unshift: 앞에서 넣는것
fruits.unshift('haha', 'hihi')
console.log(fruits)

// shift: 앞에서 부터 빼버림
fruits.shift()
fruits.shift()
console.log(fruits)


// note!!  shift, unshift 느리다 push, pop 보다

console.clear()
// splice: 지정된 곳에서 삭제 인덱스로
fruits.push('a', 'b', 'c')
console.log(fruits)
fruits.splice(2, 1)
console.log(fruits)
fruits.splice(2, 1, 'd', 'e')
console.log(fruits)

// combine two arrays
const fruits2 = ['vah', 'ghl']
const newFruits = fruits.concat(fruits2)
console.log(newFruits)


// 5. Searching
// indexof, includes
console.clear()
console.log(fruits)
console.log(fruits.indexOf('e'))
console.log(fruits.includes('kaka'))

console.clear()
// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    console.log(fruits.join())
  }
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    console.log(fruits.split(','))
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse()
    console.log(result)
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5)
    console.log(result)
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }

  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  console.clear()
  // Q5. find a student with the score 90
  {
    const result = students.find( (student) => 
       student.score === 90
    );
    console.log(result)
  }
  
  // Q6. make an array of enrolled students
  {
    const result = students.filter( (student) => student.enrolled)
    console.log(result)
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
    // map: 배열 하나 요소 하나하나를 다른것으로 변환
    const result = students.map( (student) => student.score)
    console.log(result)
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    console.clear()
    const result = students.some((student) => student.score < 50)
    console.log(result)
  }
  
  // Q9. compute students' average score
  {
    const result = students.reduce((prev, curr) => {
      console.log('-----------')
      console.log(prev)
      console.log(curr)
      return curr
    }, 0)
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
  }