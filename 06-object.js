// call function as a constructor:
function Person(firstArgument, secondArgument){
    this.name = firstArgument;
    this.surname = secondArgument;
    this.toString = () => {
        return `${this.name}  ${this.surname}`;
    }
};

let jack = new Person("Jack", "Riper");
console.log(`explicit object creation from function : [${jack.name}]   [${jack.surname}]   ${jack.toString()}`);


let john = {
    name : "John",
    surname : "Lehnon",
    toString : function(){
        return `${this.name}  ${this.surname}`;
    }
};
console.log(`object: ${john}`);

let sharlize = new Object();
sharlize.name = "Sharlize";
sharlize.surname = "Theron";
sharlize.toString = ()=>`${this.name}  ${this.surname}`;
console.log(`object with arrow function is not working : ${sharlize}`)

let sourceObject = {model: "2104", color: "green"}
let {model: modelFromSource, color: colorFromSource} = sourceObject;
console.log(`destructuring the object:  ${modelFromSource}  ${colorFromSource} `);
let {model:modelSource, color:colorSource} = sourceObject;
console.log(`destructuring the object:  ${modelSource}  ${colorSource} `);
let {model, color} = sourceObject;
console.log(`destructuring the object with shortcuts:  ${model}  ${color} `);
let {["model"]:modelByPropertyName} = sourceObject;
console.log(`destructuring the object with naming value:  ${modelByPropertyName} `);


new Object(); // {}
new String(); // "", '', ``
new Number(); // 0
new Boolean(); // true/false
new Array(); // []
new RegExp(); //
new Function(); // function()/()=>
new Date(); //


console.log("Object static functions ");
console.log(`Keys: ${Object.keys(john)}`);
// console.log(`Values: ${Object.values(john)}`); ES2017 only
// console.log(`Entries: ${john.entries()}`);
