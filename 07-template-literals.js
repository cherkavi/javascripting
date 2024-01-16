let object1 = {'name': 'Vanya', 'age' : 25}
let object2 = {'name': 'Gena', 'age' : 35}

// example of templating
console.log(` First person: ${object1.name} with age: ${object1.age}`)
console.log(` Second person: ${object2.name} with age: ${object2.age}`)

// example of templating with calculation
console.log(` average age: ${(object2.age + object1.age)/2}`)
