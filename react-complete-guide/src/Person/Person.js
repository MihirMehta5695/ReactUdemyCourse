// React convention to name component Folder with capital letter
// Also, it is also convention to name all the files in same context
// react is all about compos
// This is a state-less component 
// Also called as dumb component or presentational component

import React from 'react';

// This is possible
export function PersonOld() {
    return <h2>Hello World!</h2>
}

// This is also possible (ES5 syntax)
export var personES5 = function () {
    return <h2>Hello World!<br />This is a person component!</h2>
};

// The convention and
//the standard using ES6 is 
// props can have any  name
// When using class-based components, we access props by -> this.props

const person = (props) => {
    // 'children' is a reserved keyword
    // we can access the data passed between the component tag using props.children
    return (
        <div>
            <p onClick={props.myClick}>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.myChange} value={props.name} />
        </div>
    )
    // here, the props.myClick is the function passed by the parent component
    // here, the props.myChange is the function passed by the parent component
}

export default person;