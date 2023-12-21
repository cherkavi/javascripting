//                       object destructor
function ChildObject({...properties}){
    //              create object from all properties with key-value    
    return <section onClick={()=>{console.log("click")}} {...properties}></section>
}

function CompositeObject(){
    //                  Forwarding properties
    return <ChildObject id="my_id" className="some_class" />
}