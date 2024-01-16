// default parameters
function summarize (x, y, z = 5) {
    // console.log('x=%s  y=%s  z=%s', x, y, z)
    console.log(`---\n input arguments <${arguments.length}>: ${arguments[0]}, ${arguments[1]}, ${arguments[2]} `);
    // print of owner of the object
    console.log(this.toString())
    // example of previous solutions
    if(y===undefined){
        return ""+x+z;
    }
    return ""+x+y+z;
}

console.log(`example with full list of parameters: ${summarize(5,6,7)}`)
console.log(`example with partial list of parameters: ${summarize(8,9)}`)
console.log(`example with partial list of parameters: ${summarize(4)} `)

let contextObject = {name: "Tesla", location: "USA", toString: function(){return `[${this.name} ${this.location}]`}};
console.log(`call function with context object ${summarize.call(contextObject,1, 2, 3)}`);


// rest parameter
function increase (increaseValue, ... restList) {
    return restList.map(each => each + increaseValue)
}
console.log(`call function with rest parameter: ${increase(5, 1,2,3,4,5)} `);


// spread parameters
list1 = [1,2,3,4,5]
list2 = [12, 13, 14]
console.log(`spread parameters: ${[...list1, 6,7,8,9,10,11,...list2,15,16,17,18]}`)

let [first, second, ...rest] = list1;
console.log(`example of destructing  ${first}  ${second}   ${rest}`);