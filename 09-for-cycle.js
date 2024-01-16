var list = [3,  , 7, 9];
console.log("=== list of values ===");
console.log(list);

console.log("=== print keys ===");
for (var eachKey of list.keys()){
    console.log(eachKey + "  " + list[eachKey])
}

console.log("=== print values ===");
for (var each of list){
    console.log(each)
}

console.log("=== print indexes  ===");
for ( each in list){
    console.log(each);
}

console.log("=== print values by index====");
for ( var index = 0; index<list.length; index++){
    console.log(list[index]);
}
