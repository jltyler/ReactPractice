import React from 'react';
import './Person.css';
import Common from '../common'

const person = (props) => {
    const x = <p className="sith">Darth <span className="name">{props.name}</span> {Common.choice(['the', 'a', 'some'])} <span className="title">{props.title}</span></p>
    return x
}

export default person;