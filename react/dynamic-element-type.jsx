import React from 'react';
import ReactDOM from 'react-dom/client';

interface User{
    name: string,
    position: string;
}
const users=[
    {name: "Uwe",  position: "Manager"},
    {name: "Karl", position: "Superviser"},
    {name: "Ivan", position: "Slave"}
]

//// Dynamic component, set component type without hardcoded value, runtime HtmlElement definition

// using property as name of HtmlElement
function UserDescription(props: any){
    // name of the constant must start with upper case to be a ElementName
    const WrapElement = props.wrapper;
    return <>
            <WrapElement>Name:</WrapElement> {props.user.name}
            <hr />
    </>
}

// using property as HtmlElement
function ItalicText(props: any){
    return <i>{props.children}</i>
}
function UserDescription2(props: any){
    // name of the constant must start with upper case to be a ElementName
    return <>
            <props.wrapper>Name:</props.wrapper> {props.user.name}
            <hr />
    </>
}

// dynamic component complex example
// export default function Button({Icon, children, mode="filled", ...properties}) {
    // {Icon, children, mode = "filled",}
    // let mode = props.mode?props.mode:"filled";
    // let children = props.children;

//    let cssClassName = "button "+mode+"-button "+ (properties.className?properties.className:"" ) + (Icon?' icon-button':"");
//    return <button className={cssClassName} {...properties}>
//            {Icon && <span className="button-icon"><Icon /></span>}
//            <span>{children}</span>
//        </button>
//}



// root element
function App() {
    const returnValue = [];
    for(const eachUser of users){
        // using wrapper-property as name of HtmlElement
        returnValue.push( <UserDescription   user={eachUser} wrapper="b" /> );
        // using wrapper-property as HtmlElement
        returnValue.push( <UserDescription2  user={eachUser} wrapper={ItalicText} /> );
    }
  return (
    <ul>
        {returnValue}
    </ul>
  );
}

// render root
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


