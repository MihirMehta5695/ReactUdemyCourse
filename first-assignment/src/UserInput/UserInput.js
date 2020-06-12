import React from 'react';

const userInput = (props) => {
    // 'children' is a reserved keyword
    // we can access the data passed between the component tag using props.children
    return (
        <div className="UserInput">
            <input type="text" onChange={props.myInputChange} value={props.userName} />
        </div>
    )
    // here, the props.myClick is the function passed by the parent component
    // here, the props.myChange is the function passed by the parent component
}

export default userInput;