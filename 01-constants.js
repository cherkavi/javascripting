const VALUE = 5555;
console.log( "constant inside the current block: " + VALUE  );

(function(){
    console.log(`re-assign constant with new value`);
    const VALUE = 20;
    console.log("constant inside nested block after re-init: " + VALUE);
})();

console.log( "constant inside the current block after execution of function : " + VALUE  );


let list = [5,6,7,8,9];
console.log(`reverse array: ${list}`);
for(let i=0;i<list.length/2;i++){
    console.log(`li  ${list[i]},  ${list[list.length-i-1]}`);
    [list[i], list[list.length-i-1]] = [list[list.length-i-1], list[i]];
}
console.log(list);