let one = "one";
let two = "two";
let three = "three";
let four = "four";

let category = new Set([one, two, three, four]);
console.log(`list of unique objects: ${JSON.stringify([...category])}`);

let categoryWeak = new WeakSet();
try{
    categoryWeak.add(one);
}catch(e){
    console.log(`can't assign for WeakSet primitive values`);
}

let oneString = new String("one");
let twoString = new String("two");
let threeString = new String("three");
let fourString = new String("four");
categoryWeak.add(oneString);
categoryWeak.add(twoString);
categoryWeak.add(twoString);
categoryWeak.add(twoString);
categoryWeak.add(threeString);
categoryWeak.add(fourString);
console.log(`does weakSet contains one ? : ${categoryWeak.has(oneString)}`);
console.log(`does weakSet contains two ? : ${categoryWeak.has(twoString)}`);
console.log(`does weakSet contains three ? : ${categoryWeak.has(threeString)}`);
console.log(`does weakSet contains four ? : ${categoryWeak.has(fourString)}`);
oneString = null;
twoString = null;
threeString = null;
fourString = null;
console.log(`check after set variables to null `);
console.log(`does weakSet contains one ? : ${categoryWeak.has(oneString)}`);
console.log(`does weakSet contains two ? : ${categoryWeak.has(twoString)}`);
console.log(`does weakSet contains three ? : ${categoryWeak.has(threeString)}`);
console.log(`does weakSet contains four ? : ${categoryWeak.has(fourString)}`);
