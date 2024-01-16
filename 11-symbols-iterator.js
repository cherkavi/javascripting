class CustomIterator{

    constructor(count){
        this._count = count;
    }

    // main method of class iterator
    next(){
        if(this._count>0){
            this._count--;
            return {done:false, value: this._count};
        }else{
            return {done:true};
        }
    }
}


class IterableObject {
    // object with method Symbol.iterator
    [Symbol.iterator](){
        return new CustomIterator(10);
    };

}

for (var eachValue of new IterableObject()){
    console.log(eachValue);
}