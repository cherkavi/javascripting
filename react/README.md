# ReactJS
## JSX
  * [jsx rules](https://react.dev/learn/writing-markup-with-jsx)
    * Return a single root element ( or <> </>)
    * Close all the tags
    * camelCase all most of the things! 
  * [html-to-jsx converter](https://transform.tools/html-to-jsx)
  * files must have `.jsx` suffix ( extension )
## Components
### Rules:
 * function must start with UpperCase
 * function must return renderable value ( JSX )
 * small example
### component example
```js
function MyComponent(){
    return <> <div>hello</div> </>
}
export function MyCompositeComponent(){
    return (<div> <MyComponent /> </div>)
}
```
```js
// ! import Component from 'react';
import React, { Component } from 'react';
export class MainGoal extends Component {
    render(){    
        return <p>My main goal</p>
    }
}
```
### component create 
#### component create via npx
```sh
# npm install --save-dev create-react-component-folder
COMPONENT_NAME=MyComponent
npx crcf $COMPONENT_NAME
```
### Resources ( img, css)
```js
import myImg from './assets/img/1.jpg'
function TableHeader(){
    // post-compiled-generated `src` property will be included 
    // no "" or '' should be added 
    return <> <img src={myImg} /> </>
}
```
### Props
> parameters for component, put data into component
```jsx
function TableHeader(props){
    return <> hello {props.name} {props.title} </>
}
function TableHeader({name, title="default_title"}){
    return <> hello {name} {title} </>
}
function Table(){
    const userData={name: "Egor", title="Pilot"}
    return <>
        <TableHeader name="Valerian" title="Gameboy" />
        <TableHeader  {...userData} />
        <TableHeader2 {...userData} />
    </>
}
```
### State
```javascript
import { useState } from 'react';
// import React from 'react';

function MyComponent(){    
    // `setValue` is not updating `value` immediatelly,
    // value will be updated after the whole component refresh
    const [value, setValue]=useState(initValue); // React.useState();
    
    return { <>  </> }
}
```

### Hooks ( starts with 'use...')
rules of hooks:
1. should be called inside the component
2. not inside the nested function

## [create react app](https://create-react-app.dev/docs/adding-typescript/)
```sh
APP_NAME=my_app_name
# use nvm for another version of node
npx create-react-app $APP_NAME

# https://www.npmjs.com/package/cra-template-typescript
npx create-react-app $APP_NAME --template typescript
npx create-react-app $APP_NAME --template cra-template-typescript

cd $APP_NAME
# `npm install` has already been executed by npx 
npm start # `npm run start` - package.json#scripts
```


![type of components](https://i.postimg.cc/RhWJ08B2/ksnip-20210211-230707.png)

![lifecycle - creation](https://i.postimg.cc/5y6kP6F9/lifecycle-creation-learning-card.png)
![lifecycle - update](https://i.postimg.cc/wxGr1cS1/lifecycle-update-external-learning-card.png)

## style pseudo selector
```js
// npm install --save radium

import Radium from 'radium';
style={
   ':hover': {
   	backgroundColor:"red"
   },
   '@media (min-witdh: 480px)':{
   	width: "350px"
   }
}

export default Radium(MyComponent);

// for media - wrap root component with:
// import { StyleRoot } from 'radium';
// <StyleRoot> </StyleRoot>
```.

![NextJS ServerSideRendering](https://i.postimg.cc/L6nxk6BP/nextjs-ssr.png)

### import alias
```js
import { Location as LocationModel } from 'src/app/core/models/location.model';
```

```sh

```