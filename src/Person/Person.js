import React from 'react';
import './Person.css';

const printChilluns = (props) => {
    console.log("props.children:", props.children)
}

const person = (props) => {
    const x = (
        <div className="namecard" >
            <h2>Darth <span className="name">{props.name}</span></h2>
            <h3 className="title">{props.title}</h3>
            {props.children && <p>{props.children}</p>}
            {props.textChange && <input type="text" onChange={props.textChange} value={props.name} />}
        </div>
    );
    return x
}

export default person;