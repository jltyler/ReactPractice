import React from 'react';

export default (props) => {
    if (props.char === undefined) return null;
    const style = {
        border: '1px solid black',
        backgroundColor: '#ddd',
        display: 'inline-block',
        maxWidth: '20px',
        padding: '10px',
        margin: '0 4px'
    };
    return (
        <div style={style} onClick={props.removeHandler}>
            {props.char}
        </div>
    );
};