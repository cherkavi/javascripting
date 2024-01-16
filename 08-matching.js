var w = 10, x = 20, y = 30, z = 40;

[x, y] = [w, z];
console.log("array matching: x = %s,  y = %s", x, y);

var list = [1, 2, 3]
var [a, b, c = 3, d] = list;
console.log("values assigned from list: a=%s  b=%s  c=%s  d=%s", a, b, c, d);

var object1 = {'key1':'value number 1', 'key2': 'another value, number 2', 'key3': 'third value'};
var {key1 , key2 , key3} =  object1;
console.log(" object matching a = %s,  b = %s", key1, key2);

function x1([param1, param2, param3 = 5, param4 = 7]){
    console.log(`param1 = ${param1}   param2 = ${param2}   param3 = ${param3}   param4 = ${param4}`);
}
x1([1,2,3])

function x2({key1, key2, key3, key4=7}){
    console.log(`key1 = ${key1}   key2 = ${key2}   key3 = ${key3}   key4 = ${key4}`);
}
x2({key1: 1, key2: 2, key3: 3})
