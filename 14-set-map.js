let strings = ["three", "one","two","four", "four", "four", "four"];
console.log(`init array: ${strings}`);

// set
let category = new Set(strings);
console.log(`list of unique objects: ${JSON.stringify([...category])}`);

category.add("5");
category.add(5);
category.add(5);
console.log(`after adding two elements: ${JSON.stringify([...category])}`);

category.delete("one");
category.delete("zero");
console.log(`after removing 'one','zero': ${JSON.stringify([...category])}`);

console.log(`has catetory 'two': ${category.has("two")}`);
console.log(`has catetory 'six': ${category.has("six")}`);

// map --------
let score = new Map();
score.set("fenics", 3);
score.set("eagle", 5);
score.set("falcon", 7);
console.log(`get owl:${score.get("owl")}  get score of fenics:${score.get("fenics")}   size:${score.size}   has pidgin:${score.has("pidgin")}`)


let one = {value:1};
let anotherOne = {value:1};
score.set(one, 11);
score.set(anotherOne, 21);
console.log(`  size: ${score.size},   get value by new object: ${score.get({value:1})}  get value by existing object: ${score.get(one)}`);