//                       object destructor
function ChildObject({...properties}){
    //              create object from all properties with key-value    
    // ChildObject({children, ...properties}){ - the same
    //                                                   properties forwarding
    return <section onClick={()=>{console.log("click")}} {...properties}></section>
}

function CompositeObject(){
    //                  props forwarding
    return <ChildObject id="my_id" className="some_class" />
}