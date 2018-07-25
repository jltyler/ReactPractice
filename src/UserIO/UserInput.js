import React from 'react';

const UserInput = (props) => {
    if (props.changeHandler)
        return <input className="userinput" type="text" value={props.username} onChange={props.changeHandler} />
    else
        return <p>Provide an event handler as props.changeHandler or else none of this works.</p>
}

export default UserInput;