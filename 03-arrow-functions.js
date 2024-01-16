// given data
let list = [5, 6, 7, 8, 9];
let list2 = [19, 16, 15];

console.log(`filtering (>7) and mapping(+5): ${list.filter(x => x>7).map( x => x + 5 )}`);

let moreThanSevenFunction = (x) => x>7;
console.log(`filtering with function and mapping(+5): ${list.filter(moreThanSevenFunction).map(x => x + 5 )}`);

console.log(`concatenating: ${list.concat(list2)}`);

let output = [];
list2.concat(list).forEach(element => output.push(element));
console.log(`forEach, collect everything into "output" variable: ${output}`);

let objectWithFunction = {
    name: "just a name",
    echo: () => {
        console.log(this.name)
    }
};
console.log(`not working inside object: ${objectWithFunction.echo()}`);