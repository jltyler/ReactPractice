import React from 'react';
import './Person.css';
import Common from '../common'

const printChilluns = (props) => {
    console.log("props.children:", props.children)
}

const person = (props) => {
    const x = (
        <div>
        <p className="sith">Darth <span className="name">{props.name}</span> {Common.choice(['the', 'a', 'some'])} <span className="title">{props.title}</span></p>
        {props.children && <p className="tall">{props.children}</p>}
        <button onClick={(e) => printChilluns(props)}>printChilluns</button>
        {props.textChange && <input type="text" onChange={props.textChange} value={props.name} />}
        </div>
    )
    return x
}

export default person;