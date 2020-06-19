// React convention to name component Folder with capital letter
// Also, it is also convention to name all the files in same context
// react is all about compos
// This is a state-less component 
// Also called as dumb component or presentational component

import React from 'react';
// import './Person.css';
import styled from 'styled-components'
// Remember to import the css file to apply css styles

// This is possible
/*export function PersonOld() {
    return <h2>Hello World!</h2>
}*/

// This is also possible (ES5 syntax)
/*export var personES5 = function () {
    return <h2>Hello World!<br />This is a person component!</h2>
}; */

// The convention and
//the standard using ES6 is 
// props can have any  name
// When using class-based components, we access props by -> this.props

const StyledDiv = styled.div`        
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
    }
`

const person = (props) => {


    // 'children' is a reserved keyword
    // we can access the data passed between the component tag using props.children
    return (
        // <div className="Person" style={myStyle}>
        <StyledDiv>
            < p onClick={props.myClick} > I'm a {props.name} and I am {props.age} years old!</p>
            < p > {props.children}</p >
            <input type="text" onChange={props.myChange} value={props.name} />
        </StyledDiv>
    )
    // here, the props.myClick is the function passed by the parent component
    // here, the props.myChange is the function passed by the parent component
}

export default person;