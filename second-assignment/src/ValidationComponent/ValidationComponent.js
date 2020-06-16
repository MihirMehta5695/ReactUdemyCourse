import React from 'react'

export default function ValidationComponent(props) {
    let textLengthMessage = "Text long enough";
    if (props.textLength <= 5) {
        textLengthMessage = "Text too short"
    }

    return (<p>{textLengthMessage}</p>)
}