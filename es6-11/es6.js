// 1. Shorthand property names 
// Key Value 동일하면 안써도 된다.

{
    const a = {
        name: 'woong',
        age: '18'
    }

    const name = 'woong'
    const age = '18'

    const b = {
        name,
        age,
    }

}


// 2. Destructuring Assignment
{
    const student = {
        name: "anna",
        level: 1,
    }

    // Old
    {
        const name = student.name;
        const level = student.level;
        console.log(`옛 방식: ${name} ${level} `)
    }

    // New
    {
        const {
            name,
            level
        } = student;
        console.log(name, level)
    }

    { // 각각 다른 이름 할당할때
        const {
            name: studentName,
            level: studentLevel
        } = student;
        console.log(studentName, studentLevel)
    }

    // Array에서도 가능하다
    const animals = ['dog', 'cat']

    // Old
    {
        const first = animals[0]
        const second = animals[1]
    }

    // New
    {
        const [first, second] = animals;
        console.log(first, second)
    }
}

// 3. Spread Syntax
{
    const obj1 = {
        key: 'key1'
    }
    const obj2 = {
        key: 'key2'
    }
    const array = [obj1, obj2]

    // array copy
    const arrayCopy = [...array]
    console.log(array, arrayCopy)

    const arrayCopy2 = [...array, {
        key: 'key3'
    }]
    console.log(arrayCopy2)

    // object 
    const obj3 = {
        ...obj1
    }


    // array 병합가능
    const f1 = ['a', 'b']
    const f2 = ['c', 'd']

    const f3 = [...f1, ...f2]
    console.log(f3)
}


// 4. Default parameters
{
    {
        function printMessage(message = "default message") {
            console.log(message)
        }

        printMessage()
    }
}


// 5. Ternary Operator
{
    // if ~~~~ else ~~~~ 코드가 길다

    const iscat = true;

    {
        const component = iscat ? 'Okay' : 'No!!'
        console.log(component)
    }
}


// 6. Template Literals
{
    // `` 백틱
}