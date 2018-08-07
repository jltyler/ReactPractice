import React from 'react';

const ToggleButton = (props) => (
    <button onClick={props.clickHandler} >{props.text[props.status ? 0 : 1]}</button>
);

export default ToggleButton;