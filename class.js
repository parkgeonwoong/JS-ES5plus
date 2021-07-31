// Class 틀
// template
// declare once
// no data in
// ES6 

// Object 
// instance of a class
// created many times
// data in

'use strict';

// 1. Class declarations
class Person {
    // constructor: 객체가 처음 생성될 때 호출되어 멤버 변수를 초기화하고, 필요에 따라 자원 할당
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    //method
    speak() {
        console.log(`${this.name}: hello!`)
    }
}

const woong = new Person('woong', 20)
console.log(woong.name)
console.log(woong.age)
woong.speak()


// 2. Getter and setters
// 수정을 아무사람이나 못하게 막는다. private로 이게 캡슐화 이자 겟터 셋터임
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    get age() {
        return this._age
    }
    // set은 값을 설정 ==> 받아와야 한다.
    set age(value) {
        if (value < 0) {
            throw Error('age can not be negative')
        }
        this._age = value
    }
}

const user1 = new User('Steve', 'Job', 20)
console.log(user1.age)


// 3. Fieid (public, private)
class Experiment {
    publicField = 2;
    #privatedField = 0
}
const experiment = new Experiment()
console.log(experiment.publicField)
console.log(experiment.privatedField)


// 4. Static properties and methods
class Article {
    static publisher = 'Dream Coding'
    constructor(articleNumber) {
        this.articleNumber = articleNumber
    }

    static printPublisher() {
        console.log(Article.publisher)
    }
}

const article1 = new Article(1)
const article2 = new Article(2)
console.log(Article.publisher)
Article.printPublisher();


// 5. Inheritance
// a way for one class to extend another class
class Shape {
    constructor(width, height, color) {
        this.width = width
        this.height = height
        this.color = color
    }

    draw() {
        console.log(`drawing ${this.color} color of`)
    }

    getArea() {
        return this.width * this.height;
    }
}
// 이렇듯 shape 클래스를 rectangle에 가져와서 그대로 쓸 수 있다.
class Rectangle extends Shape {}
class Triangle extends Shape {
    // override: 필요한 함수만 재정의 할 수 있다.
    getArea() {
        return (this.width * this.height) / 2
    }
    // super: 부모의 메소드 호출
    draw() {
        super.draw()
        console.log('👉')
    } 
}

const rectangle = new Rectangle(20, 20, 'blue')
rectangle.draw()

const triangle = new Triangle(20, 20, 'red')
triangle.draw()
console.log(triangle.getArea())



// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle)
console.log(triangle instanceof Rectangle)

// js reference MDN 검색