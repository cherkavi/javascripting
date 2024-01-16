class Car{
    constructor(vendor, model){
        this._model = model;
        this._vendor = vendor;
    }
    toString(){
        return `${this._model} : ${this._vendor}`;
    }
    get model(){
        return this._model;
    }
    set model(newValue){
        if(!newValue){
            return;
        }
        this._model = newValue;
    }
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
let handler = {
   get: function(target, name){
        if(name!='model'){
            return target._model;
        }
        return target[name];
   }
}

let car = new Car("VAZ", "2104");
console.log(`original object: ${JSON.stringify(car)}` );
car.model ="2108";
console.log(`object after model changes: ${JSON.stringify(car)}` );
let proxyCar = new Proxy(car, handler);
console.log(`proxyCar model property: ${JSON.stringify(proxyCar.model)}` );
console.log(`proxyCar unknown property: ${JSON.stringify(proxyCar.unknownProperty)}` );
