import React from 'react';

export default (props) => {
    if (props.textLength !== undefined)
    return (
        <div>
            {props.textLength <= 4 && <h4>Text too short!</h4> }
            {props.textLength > 16 && <h4>Text too long!</h4> }
        </div>
    );
    else return null;
};