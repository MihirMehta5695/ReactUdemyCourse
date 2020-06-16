import React from 'react'
import './CharComponent.css'

export default function CharComponent(props) {
    return <span className="CharComponent" onClick={props.myClick}>{[props.character]}</span>
}