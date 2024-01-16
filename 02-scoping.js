// ------------------------------------
// given
let letGlobalScope = 20;
// !!! avoid this type of declaration !!!
var varGlobalScope = [ 3, 4, 5, 6, 7 ];

console.log(`usual visibility letGlobalScope: ${letGlobalScope}   varGlobalScope: ${varGlobalScope}`);

// then
(tempFunction = () => {
    console.log(`visibility inside function letGlobalScope: ${letGlobalScope}   varGlobalScope: ${varGlobalScope}`);
})();


// ------------------------------------
// given
(function(){
    console.log(`declare *innerVariableLet* inside function`);
    let innerVariableLet =10;
})();


{
    console.log(`declare *innerVariableVar* inside anonymous block  ${innerVariableVar}`);
    // !!! avoid this type of declaration !!!
    var innerVariableVar = 20;
}

// then
try{
    console.log(`read *innerVariableLet* from outer scope: ${innerVariableLet}`) // variable not found
}catch(ex){
    console.log(ex.message)
}

console.log(`read innerVariableVar from outer scope : ${innerVariableVar}`);