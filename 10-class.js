class Shape{

    // constructor
    constructor( x, y ){
        this._x = x;
        this._y = y;
    }

    // static method
    static printPosition(target){
        return ` x = ${target._x}   y = ${target._y}`;
    }

    // getter
    get x(){
        return this._x;
    }

    // setter
    set x(positionX){
        this._x = positionX;
    }

    get y(){
        return this._y;
    }

    // toString example
    toString(){
        return `Shape x = ${this._x}   y = ${this._y}`;
    }

    ["customMethod"](){
        return "just example";
    }
}


class Rectangle extends Shape{

    constructor(x, y, width, height){
        super(x, y);
        this._width = width;
        this._height = height;
    }

    toString(){
        return `position = (${this._x}, ${this._y}) size: ${this._width}x${this._height}`;
    }
}



var s1 = new Shape(10, 15);
console.log(" Shape#toString() = " + s1);
console.log(" Shape getter : "+s1.x + "   "+s1.y);
// setter example
s1.x = 5;
console.log(" Shape getter : "+s1.x + "   "+s1.y);
console.log(" Shape access to 'private' method '_x': "+s1._x);
console.log(" Shape execute custom method: " + s1.customMethod());
// add specific function
s1["customMethod2"] = function(){
    return "just example number 2";
}
console.log(" Shape execute custom method: "+s1.customMethod2());


var r1 = new Rectangle(10,15, 5, 7);
console.log(" Rectangle: " + r1);


// custom object
var obj1 = {
    toString(){
        return "this is to String method of custom object";
    }
    // ["anotherCustomMethod"](){
    //     return "";
    // }
}
obj1["anotherCustomMethod"] = function(){
    return "another custom method";
}
obj1._x = 5;
obj1._y = 8;

console.log(" custom object toString method: " + obj1);
console.log(" custom object custom method: "+obj1.anotherCustomMethod());
console.log(" custom object field: "+obj1._x);
console.log(" static method : "+Shape.printPosition(obj1));
